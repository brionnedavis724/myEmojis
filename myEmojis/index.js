// const myEmojis = ["🎵", "🥊", "🏋🏾"]

// function renderEmojis() {
//     const emojiContainer = document.getElementById("emoji-container")
//     emojiContainer.innerHTML = ""
//     for (let i = 0; i < myEmojis.length; i++) {
//         const emoji = document.createElement('span')
//         emoji.textContent = myEmojis[i]
//         emojiContainer.append(emoji)
//     }
// }

// renderEmojis()

// const pushBtn = document.getElementById("push-btn")
// pushBtn.addEventListener("click", function(){
//     const emojiInput = document.getElementById("emoji-input")
//     if (emojiInput.value) {
//         myEmojis.push(emojiInput.value)
//         emojiInput.value = ""
//         renderEmojis()
//     }
// })

// const unshiftBtn = document.getElementById("unshift-btn")
// unshiftBtn.addEventListener("click", function(){
//     const emojiInput = document.getElementById("emoji-input")
//     if (emojiInput.value) {
//         myEmojis.unshift(emojiInput.value)
//         emojiInput.value = ""
//         renderEmojis()
//     }
// })

// const popBtn = document.getElementById("pop-btn")
// popBtn.addEventListener("click", function(){
//     myEmojis.pop()
//     renderEmojis()
// })

// const shiftBtn = document.getElementById("shift-btn")
// shiftBtn.addEventListener("click", function(){
//     myEmojis.shift()
//     renderEmojis()
// })

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})