describe('Vérification des cartes de portfolio avec boutons, images, titres, et contenu', () => {
    beforeEach(() => {
        cy.visit('https://tested-by-naim.fr/'); // Remplacez par l'URL de votre site
    });

    it('Vérifie chaque élément des cartes de portfolio', () => {
        cy.get('#portfolio').should('be.visible'); // Vérifie que la section portfolio est visible

        cy.get('.card.portfolioContent').each(($el, index) => {
            const cardTitle = $el.find('h3.card-title').text().trim();

            // Vérification du titre
            cy.wrap($el).find('h3.card-title').should('be.visible').and('not.be.empty');

            // Vérification du contenu
            cy.wrap($el).find('p.card-text').should('be.visible').and('not.be.empty');

            // Vérification de l'image
            cy.wrap($el).find('img.card-img-top')
                .should('be.visible')
                .and(($img) => {
                    // Vérifie que l'image est bien chargée
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                });

            // Vérification du bouton
            cy.wrap($el).find('a.btn-success').then($btn => {
                if ($btn.is(':visible')) {
                    // Si le bouton est visible
                    cy.log(`La carte "${cardTitle}" contient un bouton visible.`);
                    console.log(`La carte "${cardTitle}" contient un bouton visible.`);
                } else {
                    // Si le bouton est caché (display: none)
                    cy.log(`La carte "${cardTitle}" contient un bouton caché.`);
                    console.log(`La carte "${cardTitle}" contient un bouton caché.`);
                }
            });
        });
    });
});