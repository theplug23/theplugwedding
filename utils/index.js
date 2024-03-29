function getFlashProducts(products) {
    return products.filter(item => item.sale === true).slice(0, 8);
}

function getFeaturedProducts(products) {
    return products.filter(item => item.sale === true).slice(0, 12);
}

function totalPrice(items) {
    return items.reduce((itemAcc, item) => {
        return itemAcc += (item.price * item.qty);
    }, 0);
}

function isWishListed(productId, wishList) {
    return wishList.findIndex(product => product.id === productId) !== -1;
}

function getCompareList(items) {
    return items.slice(0, 4);
}

function searchFilter(row, search) {
    return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

// short helper function
function checkLengNull(data) {
    if (data !== null) {
        return data.length > 0;
    }
    return false;
}

function isEquals(a, b) {
    if (a !== null && b !== null) {
        return a.toLowerCase() === b.toLowerCase();
    }
    return a === b
}

function minValueOne(qty) {
    if (qty < 1) {
        return 1;
    }
    return qty;
}

// filter function
function filterProductByCategory(product, selected_category) {
    if (checkLengNull(selected_category)) {
        return product.category.toLowerCase() === selected_category.toLowerCase();
    }
    return true
}

function filterProductByPrice(product, price) {
    if (checkLengNull(price)) {
        return product.price >= price[0] && product.price <= price[1];
    }
    return true
}

function filterProductByColor(product, color) {
    if (checkLengNull(color)) {
        for (var i = 0; i < product.colors.length; i++) {
            if (product.colors[i].toLowerCase() === color.toLowerCase()) {
                return true
            }
        }
        return false;
    }
    return true
}

function filterProductBySize(product, size) {
    if (checkLengNull(size)) {
        for (var i = 0; i < product.size.length; i++) {
            if (product.size[i].toLowerCase() === size.toLowerCase()) {
                return true
            }
        }
        return false;
    }
    return true
}

function dateParser(date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    })
    return newDate;
}

const longueurTexte = (word) => {
    let sentence = new String(word);
    if (sentence.indexOf('€') === 14) {
        return sentence.substring(0, 16);
    } else {
        return sentence.substring(0, 17);
    }  
}

const countText = (text) =>{
    let sentence = new String(text);
    return sentence.substring(0, 300)
}

const countTitle = (text) =>{
    let sentence = new String(text);
    return sentence.substring(0, 25)
}

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export {
    getFlashProducts,
    getFeaturedProducts,
    totalPrice,
    isWishListed,
    filterProductByCategory,
    filterProductByPrice,
    filterProductByColor,
    filterProductBySize,
    isEquals,
    minValueOne,
    getCompareList,
    searchFilter,
    dateParser,
    longueurTexte,
    countText,
    countTitle,
    shuffleArray
};