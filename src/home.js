import imgHome from '../public/img-home.jpg'

export const renderHome = () => {
    return `
    <div class="main-home">
        <p class="main-title">Brazilian barbecue as it's best!</p>
        <img class="main-img" src="${imgHome}" alt="">
        <p class="main-description">Try now the incredible taste of the traditional Brazilian barbecue without a flight to Brazil.</p>
        <button class="main-btn">ORDER NOW</button>
    </div>
`
}