// Affirmations "API"
const affirmations = [
    "You got this",
    "You'll figure it out",
    "You're a smart cookie",
    "I believe in you",
    "Sucking at something is the first step towards being good at something",
    "Struggling is part of learning",
    "Everything has cracks - that's how the light gets in",
    "Mistakes don't make you less capable",
    "We are all works in progress",
    "You are a capable human",
    "You know more than you think",
    "If everything was easy you'd be bored",
    "I admire you for taking this on",
    "You're resourceful and clever",
    "You'll find a way",
    "I know you'll sort it out",
    "Struggling means you're learning",
    "You're doing a great job",
    "It'll feel magical when it's working",
    "I'm rooting for you",
    "Your mind is full of brilliant ideas",
    "You make a difference in the world by simply existing in it",
    "You are learning valuable lessons from yourself every day",
    "You are worthy and deserving of respect",
    "You know more than you knew yesterday",
    "You're an inspiration",
    "Your life is already a miracle of chance waiting for you to shape its destiny",
    "Your life is about to be incredible",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Failure is just another way to learn how to do something right",
    "I give myself permission to do what is right for me",
    "You can do it",
    "It is not a sprint, it is a marathon. One step at a time",
    "Success is the progressive realization of a worthy goal",
    "People with goals succeed because they know where they're going",
    "All you need is the plan, the roadmap, and the courage to press on to your destination",
    "The opposite of courage in our society is not cowardice... it is conformity",
    "Whenever we're afraid, it's because we don't know enough. If we understood enough, we would never be afraid",
    "The past does not equal the future",
    "The path to success is to take massive, determined action",
    "It's what you practice in private that you will be rewarded for in public",
    "Small progress is still progress",
    "Don't worry if you find flaws in your past creations, it's because you've evolved",
    "Starting is the most difficult step - but you can do it",
    "Don't forget to enjoy the journey",
    "It's not a mistake, it's a learning opportunity",
    "Celebrate failure, dare greatly, and tell your story"
];

let button = document.getElementById("submit");
let div1 = document.getElementById("cardContainer");
let affirmation = document.createElement("p");

let save = document.getElementById("save");
let div3 = document.getElementById("generatedContainer");

let save_gen = document.getElementById("save_gen");

function generateRandomNum() {
    return Math.floor(Math.random() * affirmations.length);
}

button.onclick = function () {
    console.log(affirmations[generateRandomNum()]);
    affirmation.innerHTML = affirmations[generateRandomNum()] + "!";
    div1.appendChild(affirmation);
    affirmation.setAttribute("id","generated");
}

save.onclick = function () {
    let div2 = document.getElementById("personalContainer");
    let input = document.getElementById("personal");
    let personal_input = document.createElement("p");
    console.log(input.value);
    personal_input.innerHTML = input.value;
    div2.appendChild(personal_input);
    input.value = "";
}

save_gen.onclick = function() {
    let generated = document.getElementById("generated");
    let affirmation = document.createElement("p");
    let div3 = document.getElementById("generatedContainer");
    affirmation.innerHTML = generated.innerHTML;

    div3.appendChild(affirmation);
    div1.innerHTML = "";
}