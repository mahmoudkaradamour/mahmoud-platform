# Responsiveness & Device Adaptation

## 1. Breakpoints
We design for a continuous range of screen sizes using three primary buckets:
*   **Compact** (< 600dp): Standard phones.
*   **Medium** (600dp - 840dp): Foldables and small tablets.
*   **Expanded** (> 840dp): Large tablets and desktop (Admin/Seller dashboards).

## 2. Adaptive Layouts
*   **Navigation**: Bottom Navigation for phones, Navigation Rail for tablets, Side Drawer for desktop.
*   **Grids**: 2-column products on phones, 4-6 columns on tablets.
*   **Dialogs**: Full-screen bottom sheets on phones, centered modal dialogs on tablets.

## 3. Low-End Device Optimization
*   **Image Compression**: Request resized images from the backend based on device DPI.
*   **Animation Scaling**: Disable non-essential heavy animations on devices with < 4GB RAM (detected via device_info_plus).
*   **Lazy Loading**: Mandatory for all lists and grids.
