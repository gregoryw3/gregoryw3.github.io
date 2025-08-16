---
title: 'Building Advanced Rocketry Systems: From LoRa Networks to Active Drag Control'
description: 'My journey developing telemetry systems, mesh networks, and active drag systems for Rocketry at Virginia Tech.'
pubDate: 'Feb 20 2025'
heroImage: '../../assets/blog-placeholder-2.jpg'
tags: ['rocketry', 'embedded-systems', 'rust', 'swift', 'lora', 'telemetry']
featured: true
---

For nearly three years, I've been a Software Engineer with Rocketry at Virginia Tech, where I've had the opportunity to work with some amazing people on a competitive design team. From developing the team's website to creating sophisticated telemetry systems, this experience has been instrumental in shaping my engineering expertise.

## Team Website Development

One of my first major contributions was creating the [Rocketry at Virginia Tech website](https://rocketryatvirginiatech.org) using Astro. This project not only served the team's communication needs but also gave me valuable experience with modern web development frameworks.

## 2025 Payload and Telemetry Lead

As the current Payload and Telemetry Lead, I'm responsible for overseeing critical mission systems that ensure successful rocket flights and data collection.

## LoRa Mesh Network Development

### The Challenge

Traditional rocket telemetry systems can suffer from single points of failure. To address this, I designed a robust **data layer mesh network** using Listen Before Talk (LBT) protocol with exponential backoff.

### Technical Implementation

- **Protocol**: Listen Before Talk with exponential backoff
- **Hardware**: LoRa radios for long-range, low-power communication
- **Architecture**: Mesh network topology for redundancy
- **Result**: Reliable telemetry even when individual nodes fail

## Multi-Platform Development

### Rust-Based Payload Systems

I designed payload systems using **Rust** and the **Embassy** freamwork that incorporate:

- **Multiple IMUs** for noise reduction through sensor fusion
- **Redundant telemetry** via both traditional radios and LoRa radios
- **Real-time data processing** for flight-critical decisions

### iOS Application Development

Using **Swift**, I developed an iOS application that:

- Connects via **Bluetooth** to LoRa radios
- **Sends and receives GPS coordinates** from other network nodes
- Integrates with the connected phone's GPS
- Provides real-time visualization

## Active Drag System

Currently advancing development on our **Active Drag System** for precise altitude control:

- **Language**: C++
- **Hardware**: RP2040 microcontroller
- **Purpose**: Real-time altitude control during flight
- **Impact**: Higher precision in reaching target altitudes, improving our competition performance

## Embedded Systems Expertise

### Custom Driver Development

I've developed comprehensive drivers in both C and Rust for the RP2040:

- **PWM Servos**: For actuator control
- **IMUs**: For attitude and acceleration sensing
- **UBLOX GPS**: For positioning data
- **Barometers**: For altitude measurements
- **SPI Flash**: For data logging

### Signal Processing

Developing a **Kalman Filter** to improve the accuracy of:

- Altitude measurements
- Attitude data
- Sensor fusion from multiple sources

## Hardware Integration

### Flexible PCB Antennas

Integrated flexible PCB GPS and LoRa antennas directly onto carbon fiber booster sections:

- **Real-time updates** of flap deployment angles
- **Redundant GPS positioning** for backup navigation
- **Seamless integration** with existing rocket structure

## Impact and Applications

These projects demonstrate practical applications of:

- **Distributed systems** in aerospace environments
- **Real-time embedded programming** for safety-critical applications
- **Multi-platform development** spanning mobile, embedded, and web technologies
- **Advanced signal processing** for noisy aerospace environments

The work at Rocketry at Virginia Tech has provided invaluable hands-on experience with systems that must work reliably under extreme conditions, preparing me for the challenges of modern aerospace and embedded systems engineering.
