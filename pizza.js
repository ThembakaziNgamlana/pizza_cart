document.addEventListener('alpine:init', () => {
        Alpine.data('pizzaApp', ({
            return {
                
            
            small: 0,
            medium: 0,
            large: 0,
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
                    this.clearCart();
                } else {
                    this.statusMessage = 'Sorry - that is not enough money!';
                }
                setTimeout(() => {
                    this.statusMessage = '';
                }, 3000); // Message disappears after 3 seconds
            },
            clearCart() {
                this.small = 0;
                this.medium = 0;
                this.large = 0;
                this.paymentAmount = 0;
            },
            initializePizza() {
                this.showCart = false;
            }
        }
        }));
    });

 