let currentYear = new Date().getFullYear()

export const renderDefault = () => {
   return `
        <div class="default">
            <div class="header">
                <div class="logo">
                    <p class="logoName">Tupi BBQ</p>
                </div>

                <div class="navOptions">
                <div class="options home">Home</div>
                <div class="options menu">Menu</div>
                <div class="options contact">Contact</div>
                </div>
            </div>

            <div class="main">
                
            </div>

            <div class="footer">
                <p>© Tupi BBQ <p class="year">${currentYear}</p></p>
            </div>
        </div>
   `
}
