const spinner = {
    element: document.createElement("div"),

    radius: 50,
    direction: "",
    width: 80,
    height: 80,
    speed: 1,
    bgColor: "rgba(0, 0, 0, 0.2)",
    bgBorderColor: "gray",
    color: "purple",

    getHtml() {
        return `
        <style>
            @keyframes spin {100% { transform: rotate(${spinner.direction == "l" ? "-" : ""}360deg)}}
        </style>
        <div style="position: fixed;inset: 0;background-color: ${spinner.bgColor};display: flex;justify-content: center;align-items: center;">
            <div style="background-color: green;height: ${spinner.height}px;width: ${spinner.width}px;border-radius: ${spinner.radius}%;background-color: transparent;border: 7px ${spinner.bgBorderColor} solid;border-top: 7px ${spinner.color} solid;animation: spin ${spinner.speed}s linear infinite;"></div>
        </div>`
    },

    start() {
        spinner.element.innerHTML = spinner.getHtml()
        document.body.appendChild(spinner.element)
    },

    stop() {
        spinner.element.remove()
    },

    reload() {
        spinner.stop()
        spinner.start()
    },

    setColor(newColor) {
        spinner.color = newColor
    },

    getColor() {
        return spinner.color
    },

    setBgBorderColor(newColor) {
        spinner.bgBorderColor = newColor
    },

    getBgBorderColor() {
        return spinner.bgBorderColor
    },

    setBgColor(newColor) {
        spinner.bgColor = newColor
    },

    getBgColor() {
        return spinner.bgColor
    },

    setSpeed(newSpeed) {
        if (typeof newSpeed !== "number") throw new Error("Only numbers")
        spinner.speed = newSpeed
    },

    getSpeed() {
        return spinner.speed
    },

    setSize(newHeight, newWidth) {
        if (typeof newHeight !== "number" || typeof newWidth !== "number") throw new Error("Only numbers")
        spinner.height = newHeight
        spinner.width = newWidth
    },

    getSize() {
        return `H:${spinner.height}px - W:${spinner.width}px`
    },

    setDirection(newDirection) {
        if (newDirection.toLocaleLowerCase() === "r") {
            spinner.direction = "r"
            return
        }
        if (newDirection.toLocaleLowerCase() === "l") {
            spinner.direction = "l"
            return
        }

        throw new Error("Invalid text")
    },

    getDirection() {
        return spinner.direction
    },

    setRadius(newRadius) {
        if (typeof newRadius !== "number") throw new Error("Only numbers")
        spinner.radius = newRadius
    },

    getRadius() {
        return spinner.radius
    },

    setConfigFromJson(jsonConfig) {
        Object.keys(jsonConfig).forEach(key => {
            spinner[key] = jsonConfig[key]
        })
    },
}

const config = {
    radius: 45,
    bgColor: "rgba(0, 128, 0, 0.2)",
    bgBorderColor: "blue",
    color: "white",
    speed: 1,
    height: 100,
    width: 100,
    direction: "r"
}

spinner.start()