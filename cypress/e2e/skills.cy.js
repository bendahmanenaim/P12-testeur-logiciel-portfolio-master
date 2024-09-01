describe('Vérification des cartes de compétences', () => {
    // Avant chaque test, visiter la page principale
    beforeEach(() => {
        cy.visit('https://tested-by-naim.fr/'); 
    });

    it('Les cartes de compétences sont affichées avec une image, un titre et un texte', () => {
        // Vérifier que la section des compétences est visible
        cy.get('#skills').should('be.visible');

        // Vérifier que chaque carte de compétence est bien affichée
        cy.get('.card').each(($el, index, $list) => {
            // Vérifier que l'image de la carte est bien présente
            cy.wrap($el).find('img').should('be.visible');

            // Vérifier que le titre de la carte est bien présent
            cy.wrap($el).find('h3.card-title').should('be.visible');

            // Vérifier que le texte de la carte est bien présent
            cy.wrap($el).find('p.card-text').should('be.visible');
        });
    });
});