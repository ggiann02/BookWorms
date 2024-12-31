// Hides the last page of posts before printing new ones

// List of files to be loaded
const files = ['./main_page1.html', './main_page2.html'];

// Counter to track the current file
let currentIndex = 0;

// Event listener for the "Load More" button
document.getElementById('loadMoreButton').addEventListener('click', function () {
    if (currentIndex < files.length) {
        // Hide the previously loaded content
        const contentSection = document.getElementById('contentSection');
        contentSection.style.display = 'none';

        // Create a new XHR request
        const xhr = new XMLHttpRequest();
        
        // Open a GET request to fetch the next HTML file
        xhr.open('GET', files[currentIndex], true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Replace the content of the contentSection with the new HTML
                contentSection.innerHTML = xhr.responseText;

                // Show the new content after it's loaded
                contentSection.style.display = 'block';

                // Move to the next file
                currentIndex++;
            } else {
                console.error('Failed to load content.');
            }
        };

        xhr.onerror = function () {
            console.error('An error occurred during the request.');
        };

        // Send the request
        xhr.send();
    } else {
        // If no more files to load, disable the button
        const button = document.getElementById('loadMoreButton');
        button.textContent = 'No More Content';
        button.disabled = true;
    }
});
