import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTranslation } from "react-i18next";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    width: 'min(90vw, 640px)',
    maxHeight: '80vh',
    overflow: 'auto'
};
const styleSmallScreen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    width: '80%',
    maxHeight: '80vh',
    overflow: 'auto'
}
const styleMediumScreen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    width: '80%',
    maxHeight: '80vh',
    overflow: 'auto'
}
const videoWrapperStyle = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    marginTop: '20px',
    overflow: 'hidden',
    borderRadius: '4px',
    backgroundColor: '#000'
}
const videoFrameStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: 0
}
const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1,
    width: '34px',
    height: '34px',
    lineHeight: '30px',
    background: '#323232',
    color: '#FFFFFF',
    borderRadius: '50%',
    border: 0,
    cursor: 'pointer'
}

export default function RecupEmail() {
    const [open, setOpen] = useState(false);
    const [width] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        localStorage.setItem('tpw-newsletter', JSON.stringify({ videoPopupClosed: true }))
        setOpen(false)
    };

    useEffect(() => {
        const exist = JSON.parse(localStorage.getItem('tpw-newsletter') || '{}')

        const handleScroll = () => {
            if (!open && window.scrollY > 1800 && !exist.email && !exist.videoPopupClosed) {
                handleOpen()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [open]);

    const { t } = useTranslation()
    return (
        <div>
            {open &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={width > 890 ? style : (width > 420 ? styleMediumScreen : styleSmallScreen)}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {t('Das sagen unsere Brautpaare über uns')}
                        </Typography>
                        <button
                            type="button"
                            aria-label="Close video popup"
                            onClick={handleClose}
                            style={closeButtonStyle}
                        >
                            <i className='fa fa-close'></i>
                        </button>
                        <div id="modal-modal-description" style={videoWrapperStyle}>
                            <iframe
                                src="https://www.youtube.com/embed/qmgF1Kq4lig"
                                title="THEPLUG WEDDING video"
                                style={videoFrameStyle}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </Box>
                </Modal>
            }
        </div>
    )
}
