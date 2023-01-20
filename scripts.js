//Code appropriated from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
const copyContact = async (contact) => {
    try {
        await navigator.clipboard.writeText(contact); //for some reason doesn't work until I added async ¯\_(ツ)_/¯
        alert("Copied the text: " + contact);
    } catch (err) {
        console.error('Failed to copy: ', err);
    } 
}

//Code appropriated from https://codepen.io/alvarotrigo/pen/ZEJgqLN
let words = ['Matt', 'Matthew Cao', 'Zien', 'mattzcao', 'Matthew Zien Cao'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 50,
    speed = 70;
const wordflick = () => {
    setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
            ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }   
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) i = 0;
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) offset = forwards ? offset+1 : offset-1;
    $('#changing-name').text(part);
  },speed);
};

$(document).ready(() => {
  wordflick();
});
