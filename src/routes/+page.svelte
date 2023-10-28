<!-- src/Counter.svelte -->
<script>
	let count = 0;
  
	function increment() {
	  // Increment the count.
	  count += 1;
  
	  // Define notification options.
	  const notificationOptions = {
		type: 'basic',
		title: 'Notification Title',
		message: 'Notification Message',
		iconUrl: 'favicon.png',
	  };
  
	  // Send a notification.
	  chrome.notifications.create('notificationId', notificationOptions);
	  console.log("crome",chrome)
	}
  
	function decrement() {
	  count -= 1;
	}
  
	let items = [
	  { id: 1, name: 'Item 1' },
	  { id: 2, name: 'Item 2' },
	  { id: 3, name: 'Item 3' }
	];
	// For example, in your popup script (popup.js):


function show(){
	chrome.runtime.sendMessage({ action: 'showNotification' });
}

  </script>
  
  <h1>Welcome to SvelteKit</h1>
  
  <div class="counter">
	<p>Count: {count}</p>
	<button on:click={increment}>Increment</button>
	<button on:click={decrement}>Decrement</button>
	<button on:click={show}>Show Notification</button>
  </div>
  
  <ul>
	{#each items as item (item.id)}
	  <li>{item.name}</li>
	{/each}
  </ul>
  
  <style>
	.counter {
	  text-align: center;
	  margin: 20px;
	  color: #000;
	}
  </style>
  