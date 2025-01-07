//Loads more posts on the same page

// List of files to be loaded
const files = ['main_page1.html', 'main_page2.html'];

// Counter to track the current file
let currentIndex = 0;

// Event listener for the "Load More" button
document.getElementById('loadMoreButton').addEventListener('click', function () {
    // Check if there are more files to load
    if (currentIndex < files.length) {

        document.getElementById('contentSection').style.display = 'none';
        const xhr = new XMLHttpRequest();
        
        // Load the next file from the array
        xhr.open('GET', files[currentIndex], true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Append the loaded content to the content section
                document.getElementById('contentSection').innerHTML += xhr.responseText;

                // Increment the counter to load the next file on the next click
                currentIndex++;
            } else {
                console.error('Failed to load content.');
            }
        };

        xhr.onerror = function () {
            console.error('An error occurred during the request.');
        };

        xhr.send();
        document.getElementById('contentSection').style.display = 'block';
    } else {
        // If no more files, disable the button and update its text
        const loadMoreButton = document.getElementById('loadMoreButton');
        loadMoreButton.textContent = 'No More Posts';
        loadMoreButton.disabled = true;
    }
});