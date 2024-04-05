let text = "You are one of the most important person in my life. Nhi rha jata mereko tumse dur kbhi bhi, kisi kam me man nhi lagega, sb kuch aate hue bhi kuch krne ka man nhi krega agr tumhe khone ka esa 1 min bhi thought aaya, neend nhi aa rhi, khana khane ka, project krne ka, kisi chij ka man nhi krta 🥺..... Glti hui h lekin eske wajah hmari dosti khrab ho jayegi?, itni weak thodi h, essi dosti h ki pkka logo ki nazar lg jayegi. Please wapas se utna smile krna start kr do taaki wo lucky teeth dikh jaye, wapas se ache se baat krna start kr do, wapas se marna start kr do 👊🏼👊🏼, wapas se gussa krna start kr do, wapas se irritate hona start kr do. Really sorry for everything 😞.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();