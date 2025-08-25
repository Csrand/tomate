
# 🍅 Tomato – My Personal Pomodoro

## **Project Goal**

Build a responsive web app that helps me practice **AJAX, DOM manipulation, and custom digital sketches**. The design and animations will be **hand-drawn**.

---

## **Glossary**

* **Tomato** → A 25-minute countdown (Pomodoro session).

---

## **Functional Requirements**

### **FR01 – Timer Display**

The app must display a **countdown timer** starting at **25 minutes**, decreasing continuously until it reaches zero.

### **FR02 – Control Buttons**

Two buttons must be displayed below the timer:

* **Pause button** (on the left).
* **Restart button** (on the right).
  Both buttons must be self-explanatory (icon + label).

### **FR03 – Tomato Animation**

An animated tomato must be displayed above the timer.

* The tomato should **pulse** (grow/shrink softly) whenever a new timer session is started.

### **FR04 – Browser Notifications**

The app must be able to send **browser notifications** (via Notification API).

### **FR05 – End-of-Session Notification**

At the end of each tomato (25 minutes):

* The app must trigger a **notification** suggesting a **5-minute break**.

#### **FR05.1 – Tomato Counter**

The app must **track the number of completed tomatoes**.

#### **FR05.2 – Growing Animation**

Each time the user restarts the timer (when completed tomatoes are **> 0 and < 4**),

* The tomato animation must **grow in size** progressively.

#### **FR05.3 – Four-Tomato Cycle**

When the user completes **4 tomatoes**:

1. A notification must be triggered suggesting a **longer break**.
2. When the user returns to the page, after a **1-second delay**, the tomato must play a special **“explosion” animation**.

---

## **Implementation Notes**

* Timer accuracy should be ensured (prefer time difference with `Date.now()` over `setInterval` alone).
* State management should include: `idle`, `running`, `paused`, `finished`, plus a `cycleCount`.
* Animations should be based on **original hand-drawn sketches**, exported as **SVGs or sprite sheets**.
* Tomato growth can be achieved with **CSS transforms (scale)** or multiple sketch versions.
* Notifications depend on **user permission** via the **Notification API**.
* The completed tomato count should persist across sessions (e.g., using **localStorage**).
