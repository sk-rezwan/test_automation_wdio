class InventoryPage {
    get menuBtn() { return $('#react-burger-menu-btn'); }
    get resetBtn() { return $('#reset_sidebar_link'); }
    get logoutBtn() { return $('#logout_sidebar_link'); }
    get items() { return $$('.inventory_item'); }
    get filter() { return $('.product_sort_container'); }

    async resetApp() {
        await this.menuBtn.click();
        await this.resetBtn.click();
    }

    async logout() {
        await this.menuBtn.click();
        await this.logoutBtn.click();
    }

    async addToCart(itemIndex) {
        await this.items[itemIndex].$('.btn_inventory').click();
    }

    async sortBy(order) {
        await this.filter.selectByVisibleText(order);
    }
}

module.exports = new InventoryPage();