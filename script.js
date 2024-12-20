// =========================================================
// Dark Mode 
// =========================================================

// Ambil tombol toggle Dark Mode
const toggle = document.getElementById('DarkMode');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    localStorage.setItem('darkModeEnabled', toggle.checked);
});

// Event Listener saat halaman diload
window.addEventListener('load', () => {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }
});




// =========================================================
// Sidebar
// =========================================================
const listSidebar = document.getElementById("listSidebar");
const closeBtn = document.getElementById("Close");
const openBtn = document.getElementById("Open")

openBtn.addEventListener("click", () => {
    listSidebar.classList.toggle("hidden");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

});

closeBtn.addEventListener("click", () => {
    listSidebar.classList.toggle("hidden")
    openBtn.style.display = "inline-block";
    closeBtn.style.display= "none";
});