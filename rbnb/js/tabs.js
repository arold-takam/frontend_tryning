export class Tabs {

    #tabsData
    #tabsContainer
    #tabButtonsWrapper
    #btnScrollLeft
    #btnScrollRight
    #tabContents

    constructor(tabsData) {
        this.#tabsData = tabsData
        this.#tabsContainer = document
            .getElementById("tabs-container-template")
            .content
            .cloneNode(true);
        this.#tabButtonsWrapper = this.#tabsContainer.querySelector(".footer-tab-buttons-wrapper")
        this.#tabContents = this.#tabsContainer.querySelector(".footer-tab-contents");
        tabsData.forEach((tabData, index, _) => {
            this.#addButton(tabData.tab, index);
            this.#addContent(tabData.content, index)
        });
        this.setButtonsScroll();
    }

    setButtonsScroll() {
        this.#btnScrollLeft = this.#tabsContainer.querySelector(".scroll-left")
        this.#btnScrollRight = this.#tabsContainer.querySelector(".scroll-right")
        const step = 100
        this.#btnScrollLeft.addEventListener("click", _ => this.#scrollButtons(-step));
        this.#btnScrollRight.addEventListener("click", _ => this.#scrollButtons(step));
        this.#tabButtonsWrapper.addEventListener("scroll", () => this.#updateScrollButtons())
        window.addEventListener("resize", () => this.#updateScrollButtons())
        window.addEventListener("load", () => requestAnimationFrame(() => this.#updateScrollButtons()));
    }

    #scrollButtons(step) {
        this.#tabButtonsWrapper.scrollBy({left: step, behavior: "smooth"})
        this.#updateScrollButtons();
    }

    #updateScrollButtons() {
        this.#btnScrollLeft.classList.toggle("hidden", this.#tabButtonsWrapper.scrollLeft <= 0)
        this.#btnScrollRight.classList.toggle(
            "hidden",
            Math.ceil(this.#tabButtonsWrapper.scrollLeft + this.#tabButtonsWrapper.clientWidth) >= this.#tabButtonsWrapper.scrollWidth
        );
    }

    get tabsContainer() {
        return this.#tabsContainer;
    }

    #addButton(tab, index) {
        const button = document
            .getElementById("tab-button-template")
            .content.firstElementChild
            .cloneNode(true);
        if (index === 0) button.classList.add("active")
        this.#tabButtonsWrapper.append(button)
        button.innerText = tab
        button.addEventListener("click", _ => {
            const buttons = this.#tabButtonsWrapper.querySelectorAll(".footer-tab-button")
            buttons.forEach(button => button.classList.remove("active"));
            const contents = this.#tabContents.querySelectorAll(".footer-tab-content")
            contents.forEach(button => button.classList.remove("active"));
            button.classList.add("active")
            contents[index].classList.add("active")
        });
    }

    #addContent(content, index) {
        const tabContent = document
            .getElementById("tab-content-template")
            .content.firstElementChild
            .cloneNode(true);
        const tabPanelList = tabContent.querySelector(".footer-tab-panel-list");
        if (index === 0) tabContent.classList.add("active")
        content.forEach(item => this.#addContentItem(item, tabPanelList));
        this.#tabContents.append(tabContent)
    }

    #addContentItem(item, list) {
        const tabPanelItem = document
            .getElementById("tab-panel-item-template")
            .content.firstElementChild
            .cloneNode(true);
        const locationElement = tabPanelItem.querySelector(".footer-tab-location strong");
        const typeElement = tabPanelItem.querySelector(".footer-tab-type");
        locationElement.innerText = item.location
        typeElement.innerText = item.type
        list.append(tabPanelItem)
    }
}