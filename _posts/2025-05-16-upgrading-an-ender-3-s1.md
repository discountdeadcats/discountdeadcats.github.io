---
title: "Upgrading an Ender 3 S1"
date: 2025-05-16
layout: post
categories: [projects]
tags: [3d-printing]
---

## Upgrading an Ender 3 S1

About a year ago, I bought an Ender 3 S1. Although I've had a lot of issues with this printer, I've also made several upgrades. Let's get into them.

---

### PEI Flex Plate

The first upgrade I made was swapping the stock CMagnet build plate for a dual-sided PEI sheet. I damaged the original plate within a month by setting the nozzle too low, which dragged it across the surface and melted it.

The PEI plate I bought was inexpensive and works well, although I do need to clean it more frequently than my other PEI plate. (Affiliate link below.)

---

### Recovery from the Blob of Doom

After experiencing the infamous "Blob of Doom," I had to replace the entire hotend and heatsink assembly—twice. Since then, I’ve avoided printing unattended.

---

### OctoPrint

For a while, I used OctoPrint on a Raspberry Pi 3A+, which worked surprisingly well given the Pi's limitations (I got it during the Great Pi Shortage). I installed several extensions:
- **PrettyGCode**
- **OctoLapse**
- **OctoEverywhere**
- **Cancel Object**

There may have been others, but eventually, I switched to...

---

### Klipper

Honestly, setting up Klipper was much easier than I expected. I’m comfortable with Linux, Raspberry Pis, and the command line, which probably helped.

Right now, the printer is running Klipper with:
- **OctoEverywhere**
- **KlipperScreen**
- A **custom printed case** for the screen and controller

So far, it’s been stable.

---

### CHT Nozzle

I picked up a knockoff CHT MK8 nozzle from AliExpress. I haven’t used it much yet, but I’m hoping it will improve flow rate when I do.

---

## Future Upgrades

### Taurus V5 Cooling Mod

The Sprite extruder is known to have subpar cooling. I printed the parts for the **Taurus V5** mod, which uses two 5015 blower fans for better airflow. Just waiting on a few components to finish the install.

---

### Input Shaping

I also ordered an **ADXL345** accelerometer to enable input shaping and hopefully eliminate ringing artifacts at higher speeds. We’ll see how it goes.

