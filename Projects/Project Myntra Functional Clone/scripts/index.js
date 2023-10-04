const displayRatingCount = (count) => {
    return count < 999 ? count : `${(count / 1000).toFixed(1)}k`; 
}
let itemsHTML = '';
items.forEach(function(item, i) {
    itemsHTML += `
    <div class="item-details">
        <img class="sale_item" src="${items[i].image}">
        <div class="stars">${items[i].rating.stars} ⭐ | ${displayRatingCount(items[i].rating.count)}</div>
        <div class="company">${items[i].company}</div>
        <div class="item-name">${items[i].item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs ${items[i].current_price}</span>
            <span class="original-price">Rs ${items[i].original_price}</span>
            <span class="discount-percentage">(${items[i].discount_percentage}% OFF)</span>
        </div>
        <button class="btn-bag">Add to Bag</button>
    </div>`;
});
document.querySelector('.category-items').innerHTML = itemsHTML;