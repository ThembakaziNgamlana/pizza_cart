function Counter() {
    return {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    };
  }

  // add event listener for the counter
  document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
  });