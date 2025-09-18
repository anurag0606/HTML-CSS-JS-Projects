function detectChar() {
    const unicode = document.getElementById("code").value;


    if (unicode) {
        const uniCodeValue = unicode.charCodeAt(0);
        //charAt() method returns the character at a specified index(position) in a string.

        const result = `The UnicodeValue of "${unicode}" is ${uniCodeValue}`;
        document.getElementById("result").textContent = result;
    }
    else {
        document.getElementById("result").textContent = 'Please Enter a Character';

    }
}