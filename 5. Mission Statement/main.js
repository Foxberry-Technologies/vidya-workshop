function showTab(tabId) {
      // Hide all tab contents
      const contents = document.getElementsByClassName('content');
      for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
      }

      // Deactivate all tabs
      const tabs = document.getElementsByClassName('tab');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
      }

      // Show the selected tab content
      document.getElementById(tabId).style.display = 'flex';

      // Activate the clicked tab
      document.getElementById(tabId + '-tab').classList.add('active');
    }

// Set the first tab as active by default
document.getElementsByClassName('tab')[0].click();
