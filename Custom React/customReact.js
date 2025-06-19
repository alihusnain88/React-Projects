element = {
    type: 'a',
    props : {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Visit Google"
}

function Render(sourceElem, destElem){
    actualElem = document.createElement(sourceElem.type)
    actualElem.innerHTML = sourceElem.children
    actualElem.setAttribute('href', sourceElem.props.href)
    actualElem.setAttribute('target', sourceElem.props.target)

    destElem.appendChild(actualElem)
}

let main = document.getElementById('root')
Render(element, main)