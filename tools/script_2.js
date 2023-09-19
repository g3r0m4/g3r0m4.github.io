function convertText() {
            const inputText = document.getElementById('inputText').value;
            const conversionType = document.getElementById('conversionType').value;
            const encodingType = document.getElementById('encodingType').value;
            let result = '';

            if (conversionType === 'encode') {
                switch (encodingType) {
                    case 'base64':
                        // Encode the input string to Base64
                        result = btoa(inputText);
                        break;
                    case 'hex':
                        // Encode the input string to Hexadecimal
                        result = stringToHex(inputText);
                        break;
                    case 'url':
                        // URL Encode the input string
                        result = encodeURIComponent(inputText);
                        break;
                    case 'binary':
                        // Encode the input string to Binary
                        result = stringToBinary(inputText);
                        break;
                    case 'chr':
                        // Convert the input string to CHR (ASCII Values)
                        result = stringToCHR(inputText);
                        break;
                    default:
                        break;
                }
            } else if (conversionType === 'decode') {
                switch (encodingType) {
                    case 'base64':
                        // Decode Base64 to the original string
                        result = atob(inputText);
                        break;
                    case 'hex':
                        // Decode Hexadecimal to the original string
                        result = hexToString(inputText);
                        break;
                    case 'url':
                        // URL Decode the input string
                        result = decodeURIComponent(inputText);
                        break;
                    case 'binary':
                        // Decode Binary to the original string
                        result = binaryToString(inputText);
                        break;
                    case 'chr':
                        // Convert CHR (ASCII Values) to a string
                        result = chrToString(inputText);
                        break;
                    default:
                        break;
                }
            }

            document.getElementById('output').innerText = 'Result: ' + result;
        }
        
        
        
        
        
        
        
        
        

        // Encoding Functions
        function stringToHex(input) {
            let hex = '';
            for (let i = 0; i < input.length; i++) {
                hex += input.charCodeAt(i).toString(16).toUpperCase();
            }
            return hex;
        }

        function stringToBinary(input) {
            let binary = '';
            for (let i = 0; i < input.length; i++) {
                const charCode = input.charCodeAt(i).toString(2);
                binary += '0'.repeat(8 - charCode.length) + charCode + ' ';
            }
            return binary.trim();
        }

        function stringToCHR(input) {
            let chr = '';
            for (let i = 0; i < input.length; i++) {
                chr += 'CHR(' + input.charCodeAt(i) + ')';
                if (i < input.length - 1) {
                    chr += ',';
                }
            }
            return chr;
        }

        // Decoding Functions
        function hexToString(input) {
            let str = '';
            for (let i = 0; i < input.length; i += 2) {
                str += String.fromCharCode(parseInt(input.substr(i, 2), 16));
            }
            return str;
        }

        function binaryToString(input) {
            const binaryArray = input.split(' ');
            let str = '';
            for (let i = 0; i < binaryArray.length; i++) {
                str += String.fromCharCode(parseInt(binaryArray[i], 2));
            }
            return str;
        }

        function chrToString(input) {
            const chrArray = input.split(',');
            let str = '';
            for (let i = 0; i < chrArray.length; i++) {
                const ascii = chrArray[i].match(/\d+/);
                if (ascii) {
                    str += String.fromCharCode(parseInt(ascii[0]));
                }
            }
            return str;
        }
