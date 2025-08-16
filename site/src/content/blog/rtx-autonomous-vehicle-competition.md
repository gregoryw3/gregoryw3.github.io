---
title: 'Placing 2nd in RTX Autonomous Vehicle Competition: GPS-Denied Navigation'
description: 'How we developed V2V GPS-denied unmanned autonomous vehicles and achieved the fastest and most accurate system in the competition.'
pubDate: 'Mar 15 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ['autonomous-vehicles', 'competition', 'opencv', 'px4', 'ros2']
featured: true
---

During my time as a Research Assistant at the Hume Center for National Security and Technology, I had the incredible opportunity to lead the development of Vehicle-to-Vehicle (V2V) GPS-denied unmanned autonomous vehicles for RTX's Autonomous Vehicle Competition. Our team's hard work paid off when we placed **2nd in the competition** with what was recognized as the overall fastest and most accurate system.

## The Challenge

The competition presented a unique challenge: create autonomous vehicles that could navigate and coordinate without GPS signals. This scenario simulates real-world conditions where GPS might be jammed or unavailable, making traditional navigation methods obsolete.

## My Role and Responsibilities

As the **Scout Vehicle Leader**, I was responsible for:

- Choosing the hardware architecture for our scout vehicle
- Leading the software architecture design
- Integrating complex navigation systems

## Technical Implementation

### Visual-Inertial Odometry Integration

One of the key technical achievements was integrating a Visual-Inertial-Odometry System (OpenVINS) into PX4. This system combines:

- **Visual odometry**: Using camera feeds to track motion
- **Inertial measurements**: IMU data for precise movement detection
- **PX4 integration**: Seamless incorporation with the flight control stack

### ROS Migration

I successfully converted existing ROS1 codebase to ROS2, modernizing our software stack and improving:

- Real-time performance
- Inter-node communication
- System reliability

## Results and Impact

Our system achieved recognition for being both the **fastest** and **most accurate** in the competition. This success demonstrated the effectiveness of our approach to GPS-denied navigation and the robustness of our V2V communication protocols.

The competition placement not only validated our technical approach but also showcased the practical applications of autonomous vehicle technology in challenging environments where traditional GPS-based navigation fails.

First place went to a team that passed the qualification tests earlier scoring bonus points, but our performance during the main event highlighted the strength of our system design and implementation.

## Key Technologies Used

- **OpenVINS** for visual-inertial odometry
- **PX4** flight control software
- **ROS2** for robotics middleware
- **Computer Vision** algorithms for environment perception
- **V2V Communication** protocols for coordination

This project reinforced my passion for autonomous systems and highlighted the importance of robust, GPS-independent navigation solutions in modern robotics applications. I also learned more about RTK GPS systems and their limitations as well as using location verification systems like OptiTrack and Qualisys.
