"use strict";
class Spinner {
    constructor() {
        this.element = document.createElement("div");
        this.radius = 50;
        this.direction = "";
        this.width = 80;
        this.height = 80;
        this.speed = 1;
        this.bgColor = "rgba(0, 0, 0, 0.2)";
        this.bgBorderColor = "gray";
        this.color = "purple";
    }
    getHtml() {
        return `
        <style>
            @keyframes spin {100% { transform: rotate(${this.direction == "l" ? "-" : ""}360deg)}}
        </style>
        <div style="position: fixed;inset: 0;background-color: ${this.bgColor};display: flex;justify-content: center;align-items: center;">
            <div style="background-color: green;height: ${this.height}px;width: ${this.width}px;border-radius: ${this.radius}%;background-color: transparent;border: 7px ${this.bgBorderColor} solid;border-top: 7px ${this.color} solid;animation: spin ${this.speed}s linear infinite;"></div>
        </div>`;
    }
    start() {
        this.element.innerHTML = this.getHtml();
        document.body.appendChild(this.element);
    }
    stop() {
        this.element.remove();
    }
    reload() {
        this.stop();
        this.start();
    }
    setColor(newColor) {
        this.color = newColor;
    }
    getColor() {
        return this.color;
    }
    setBgBorderColor(newColor) {
        this.bgBorderColor = newColor;
    }
    getBgBorderColor() {
        return this.bgBorderColor;
    }
    setBgColor(newColor) {
        this.bgColor = newColor;
    }
    getBgColor() {
        return this.bgColor;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    getSpeed() {
        return this.speed;
    }
    setSize(newHeight, newWidth) {
        this.height = newHeight;
        this.width = newWidth;
    }
    getSize() {
        return `H:${this.height}px - W:${this.width}px`;
    }
    setDirection(newDirection) {
        this.direction = newDirection;
    }
    getDirection() {
        return this.direction;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    getRadius() {
        return this.radius;
    }
}
const spinner = new Spinner();
spinner.start();
