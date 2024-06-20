class Spinner {
    private element: HTMLDivElement
    private radius: number
    private direction: string
    private width: number
    private height: number
    private speed: number
    private bgColor: string
    private bgBorderColor: string
    private color: string

    constructor() {
        this.element = document.createElement("div")
        this.radius = 50
        this.direction = ""
        this.width = 80
        this.height = 80
        this.speed = 1
        this.bgColor = "rgba(0, 0, 0, 0.2)"
        this.bgBorderColor = "gray"
        this.color = "purple"
    }

    getHtml(): string {
        return `
        <style>
            @keyframes spin {100% { transform: rotate(${this.direction == "l" ? "-" : ""}360deg)}}
        </style>
        <div style="position: fixed;inset: 0;background-color: ${this.bgColor};display: flex;justify-content: center;align-items: center;">
            <div style="background-color: green;height: ${this.height}px;width: ${this.width}px;border-radius: ${this.radius}%;background-color: transparent;border: 7px ${this.bgBorderColor} solid;border-top: 7px ${this.color} solid;animation: spin ${this.speed}s linear infinite;"></div>
        </div>`
    }

    start(): void {
        this.element.innerHTML = this.getHtml()
        document.body.appendChild(this.element)
    }

    stop(): void {
        this.element.remove()
    }

    reload(): void {
        this.stop()
        this.start()
    }

    setColor(newColor: string): void{
        this.color = newColor
    }

    getColor(): string {
        return this.color
    }

    setBgBorderColor(newColor: string): void {
        this.bgBorderColor = newColor
    }

    getBgBorderColor(): string  {
        return this.bgBorderColor
    }

    setBgColor(newColor: string): void {
        this.bgColor = newColor
    }

    getBgColor(): string {
        return this.bgColor
    }

    setSpeed(newSpeed: number): void {
        this.speed = newSpeed
    }

    getSpeed(): number {
        return this.speed
    }

    setSize(newHeight: number, newWidth: number) {
        this.height = newHeight
        this.width = newWidth
    }

    getSize(): string {
        return `H:${this.height}px - W:${this.width}px`
    }

    setDirection(newDirection: "l" | "r"): void {
        this.direction = newDirection
    }

    getDirection(): string {
        return this.direction
    }

    setRadius(newRadius: number): void {
        this.radius = newRadius
    }

    getRadius(): number {
        return this.radius
    }
}

const spinner = new Spinner()
spinner.start()