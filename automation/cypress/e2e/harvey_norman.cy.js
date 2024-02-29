describe('Harvey Norman Product Purchase Test', () => {
  it('Add Product to Cart', () => {
    cy.visit(
      'https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html'
    );

    cy.get('[data-testid="add-to-cart"]').click();

    // Wait for 2 seconds so popup can appear
    cy.wait(2000);

    // Click the View Cart Button
    cy.get(
      '.AddProductNotification_sf-add-product-notification-actions__cYnUX > .btn-hero'
    )
      .should('be.visible')
      .click();

    //  Wait for 2 seconds so add to cart operaion get time to be completed
    cy.wait(2000);

    cy.get('.item > .product-item-details > .product-item-name').should(
      'be.visible'
    );
    cy.get('.item > .product-item-details > .product-item-name > a').should(
      'have.attr',
      'href',
      'https://www.harveynorman.com.au/google-nest-cam-outdoor-or-indoor-battery-1-pack.html'
    );
  });

  it('Add Product to Cart - with Stock Check', () => {
    cy.visit(
      'https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html'
    );

    // Enter Post Code
    cy.get(
      '.ProductPageSidebarTabs_sf-sidebar-tabs-content--active__zGi0U > [data-testid="store-locator-wrapper"] > [data-testid="postcode-search-input-wrapper"] > .react-autosuggest__container > .react-autosuggest__input'
    ).type('2154 C', {
      delay: 500,
    });

    // Select the Store
    cy.get(
      '.ProductPageSidebarTabs_sf-sidebar-tabs-content--active__zGi0U > [data-testid="store-locator-wrapper"] > [data-testid="postcode-search-input-wrapper"] > .react-autosuggest__container > [role="listbox"]  > [role="listbox"] > [role="option"]'
    ).click();

    // Check Store has Product in Stock
    cy.get(
      ':nth-child(3) > .CheckStoreStockStoreListAccordion_sf-check-store-stock-store-list-accordion__IAz25 > li.CheckStoreStockStoreListAccordionItem_sf-check-store-stock-store-list-accordion-item__BUqIq > .CheckStoreStockStoreListAccordionItem_sf-check-store-stock-store-list-accordion-item-title__3S6Jv > .CheckStoreStockStoreListAccordionItem_sf-check-store-stock-store-list-accordion-item-title__stock__ZXtxP'
    ).contains('In stock');

    cy.get('[data-testid="add-to-cart"]').click();

    // Wait for 2 seconds so popup can appear
    cy.wait(2000);

    // Click the View Cart Button
    cy.get(
      '.AddProductNotification_sf-add-product-notification-actions__cYnUX > .btn-hero'
    )
      .should('be.visible')
      .click();

    //  Wait for 2 seconds so add to cart operaion get time to be completed
    cy.wait(2000);

    cy.get('.item > .product-item-details > .product-item-name').should(
      'be.visible'
    );
    cy.get('.item > .product-item-details > .product-item-name > a').should(
      'have.attr',
      'href',
      'https://www.harveynorman.com.au/google-nest-cam-outdoor-or-indoor-battery-1-pack.html'
    );
  });
});
