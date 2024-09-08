document.addEventListener('DOMContentLoaded', () => {
    const fileNameInput = document.querySelector('input');
    const textArea = document.querySelector('textarea');
    const saveButton = document.querySelector('button');
    const selectOption = document.querySelector('select');

    let selectedOption = selectOption.value;

    const setSaveButtonText = () => {
        saveButton.textContent = `SAVE AS ${selectedOption.toUpperCase()}`;
    };

    // Set initial button text
    setSaveButtonText();

    selectOption.addEventListener('change', () => {
        selectedOption = selectOption.value;
        setSaveButtonText();
    });

    saveButton.addEventListener('click', () => {
        const fileType = getFileType(selectedOption);
        if (isFileNameValid(fileNameInput, fileType)) {
            saveFile(textArea.value, fileNameInput.value, fileType);
        } else {
            alert('Please enter a valid file name with extension.');
        }
    });

    const saveFile = (data, filename, type) => {
        const file = new Blob([data], { type });
        if (window.navigator.msSaveOrOpenBlob) { // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        } else { // Other browsers
            const a = document.createElement('a');
            const url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    };

    const isFileNameValid = (fileInput, type) => {
        return fileInput.value !== '' && type !== '';
    };

    const getFileType = (fileExtension) => {
        const fileTypes = {
            'txt': 'text/plain',
            'html': 'text/html',
            'css': 'text/css',
            'js': 'text/javascript',
            'json': 'application/json',
            'doc': 'application/msword'
        };
        return fileTypes[fileExtension] || 'text/plain';
    };
});