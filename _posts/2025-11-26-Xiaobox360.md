---
title: "Xiaobox360"
date: 2025-11-26
layout: post
categories: [projects]
tags: [3d-printing,diy,tech,games]
---


# Xiaobox360

Have you ever wanted to use Xbox 360 controllers on PC without paying exorbitant prices on the official—even third-party—adapters?

I mean seriously, have you ever looked ,it is 30 dollars for an official one? And it's about the same for a third-party one.

Well, I've seen this project online a couple of times before, but never one I've been able to make—until now.

You see, the Xbox 360 RF board is only like 5 or 10 dollars on eBay. There were a lot of dead Xbox 360s—lest we forget the infamous Red Ring of Death which plagued these consoles—so you can get an RF board for pretty cheap online, and a microcontroller for even less. So with components I already had and a cheap board, I set to work making my own adapter for PC.

---

Now I should mention: I've been working on this on and off for a couple months at this point, actually.

Despite it seeming simple, there were some harder parts to do.

The breakthrough came when I realized I needed a separate USB-C port and couldn't use the one on the microcontroller.

I don't code too well, so I had help from AI—ChatGPT, Claude, and Gemini. Unfortunately, Gemini tried to gaslight me. It told me that I had to brake its encryption and reverse-engineer it, and when I told it that there were other projects that did the same thing that I was trying to do without having to do any of that, it said that they didn't work and they just lit up. Goes to show that you shouldn't always trust AI—although I use it a lot.

---

Anyway, so after I had it built, I decided to find a nice case for it. I ended up modifying one slightly from a Thingiverse, and it ended up turning out pretty nice—it looks like an Xbox One.

I modified it so it would have a USB-C hole.

---

Anyway, so how does it work?

Well, first you plug it in with the USB-C port. Then you have to select the right driver from the list on Device Manager in Windows. I think it's plug and play on Linux (I haven't tried it on Mac). Let me know if you try that. Once you've selected the driver, you have to pair it to your Xbox 360 controller. The light doesn't always stay on all the time—even though it is connected.

---

So yeah, once it's connected, you're able to play most games on your computer with an Xbox 360 controller for about $15, provided you have all the equipment.

"If you want to try this yourself, I’ll link the parts and code in the description. Drop a comment if you’ve made something similar—or if you want help troubleshooting yours!”
