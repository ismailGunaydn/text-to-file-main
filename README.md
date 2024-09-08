
1. **DOM Content Loaded Event**: 
   - Listens for the DOM to fully load, then initializes variables and sets the initial text of the save button based on the selected file type.

2. **Set Save Button Text**: 
   - Updates the save button text to include the selected file type in uppercase letters.

3. **Select Option Change Event**: 
   - When the selected file type changes, it updates the `selectedOption` variable and the save button text to reflect the new selection.

4. **Save Button Click Event**: 
   - When the save button is clicked, it checks if the file name and type are valid. If valid, it calls the `saveFile` function to save the file.

5. **Save File Function**: 
   - Creates a Blob object with the provided data and file type. For IE10+ browsers, it uses `msSaveOrOpenBlob`. For other browsers, it creates a downloadable link to the file and simulates a click to trigger the download.

6. **Validate File Name Function**: 
   - Checks if the file name and type are not empty.

7. **Get File Type Function**: 
   - Returns the appropriate MIME type based on the file extension.


