document.addEventListener('alpine:init', () => {
        Alpine.data('pizzaApp', function(){
        return{
            small: 0,
            medium: 0,
            large: 0,  
            charge: 0,
            
            paymentAmount: 0,
            statusMessage: '',
      
            incrementSmall() {
                this.small++;
            },
            decrementSmall() {
                if (this.small > 0) {
                    this.small--;
                }
            },
            incrementMedium() {
                this.medium++;
            },
            decrementMedium() {
                if (this.medium > 0) {
                    this.medium--;
                }
            },
            incrementLarge() {
                this.large++;
            },
            decrementLarge() {
                if (this.large > 0) {
                    this.large--;
                }
            },
            checkout() {
                const totalAmount = this.small * 70 + this.medium * 90 + this.large * 130;
                if (this.paymentAmount >= totalAmount) {
                    this.statusMessage = 'Enjoy your pizzas!';
                    this.charge += totalAmount; 
                    this.clearCart();
                } else {
                    this.statusMessage = 'Sorry - that is not enough money!';
                }
                setTimeout(() => {
                    this.statusMessage = '';
                }, 3000); 
            },
            clearCart() {
                this.small = 0;
                this.medium = 0;
                this.large = 0;
                this.paymentAmount = 0;
            },
            initializePizza() {
                this.showCart = false;
            },
            smallTotal() {
                return this.small * 49.99;
            },
            mediumTotal() {
                return this.medium * 90.00;
            },
            largeTotal() {
                return this.large * 130.00;
            }
              }
            
        } );
    });

    