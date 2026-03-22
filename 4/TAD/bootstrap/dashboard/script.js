// script.js - Comportamientos para el Dashboard de Sistemas Conectados

// Toggle sidebar
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-hidden');
    main.classList.toggle('main-expanded');
});

// Función para actualizar métricas dinámicamente (simulación de datos en tiempo real)
function updateMetrics() {
    const connectedDevices = document.getElementById('connectedDevices');
    const bandwidthUsage = document.getElementById('bandwidthUsage');
    const activeAlerts = document.getElementById('activeAlerts');
    const averageSpeed = document.getElementById('averageSpeed');

    // Simular cambios aleatorios
    let devices = parseInt(connectedDevices.textContent);
    devices += Math.floor(Math.random() * 3) - 1; // Cambiar entre -1 y +1
    devices = Math.max(20, Math.min(30, devices)); // Mantener entre 20 y 30
    connectedDevices.textContent = devices;

    let bandwidth = parseInt(bandwidthUsage.textContent);
    bandwidth += Math.floor(Math.random() * 5) - 2; // Cambiar entre -2 y +2
    bandwidth = Math.max(50, Math.min(90, bandwidth)); // Mantener entre 50% y 90%
    bandwidthUsage.textContent = bandwidth + '%';

    let alerts = parseInt(activeAlerts.textContent);
    alerts += Math.floor(Math.random() * 3) - 1; // Cambiar entre -1 y +1
    alerts = Math.max(0, Math.min(10, alerts)); // Mantener entre 0 y 10
    activeAlerts.textContent = alerts;

    let speed = parseInt(averageSpeed.textContent);
    speed += Math.floor(Math.random() * 10) - 5; // Cambiar entre -5 y +5
    speed = Math.max(70, Math.min(100, speed)); // Mantener entre 70 y 100 Mbps
    averageSpeed.textContent = speed + ' Mbps';
}

// Actualizar métricas cada 5 segundos
setInterval(updateMetrics, 5000);

// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Funcionalidad del modal de configuración de dispositivo
const deviceModal = document.getElementById('deviceModal');
const saveDeviceBtn = deviceModal.querySelector('.btn-primary');

saveDeviceBtn.addEventListener('click', function() {
    const deviceName = document.getElementById('deviceName').value;
    const deviceIP = document.getElementById('deviceIP').value;
    const deviceStatus = document.getElementById('deviceStatus').value;

    if (deviceName && deviceIP) {
        // Aquí se podría enviar los datos a un servidor, pero por ahora solo mostramos una alerta
        alert(`Dispositivo configurado:\nNombre: ${deviceName}\nIP: ${deviceIP}\nEstado: ${deviceStatus}`);
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(deviceModal);
        modal.hide();
        // Limpiar formulario
        document.getElementById('deviceName').value = '';
        document.getElementById('deviceIP').value = '';
        document.getElementById('deviceStatus').selectedIndex = 0;
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Funcionalidad del formulario de configuración
const settingsForm = document.querySelector('#settings form');
settingsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const networkName = document.getElementById('networkName').value;
    const securityLevel = document.getElementById('securityLevel').value;

    alert(`Configuración guardada:\nNombre de Red: ${networkName}\nNivel de Seguridad: ${securityLevel}`);
});

// Agregar tooltips a elementos con data-bs-toggle="tooltip"
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Animación de carga para las cards (fade in)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Función para simular actualización de logs
function addLogEntry(message) {
    const logList = document.querySelector('#logsAccordion .accordion-collapse.show .list-group');
    if (logList) {
        const newEntry = document.createElement('li');
        newEntry.className = 'list-group-item';
        newEntry.textContent = new Date().toLocaleTimeString() + ' - ' + message;
        logList.appendChild(newEntry);
    }
}

// Agregar una entrada de log cada 10 segundos (simulación)
setInterval(() => {
    const messages = [
        'Nuevo dispositivo conectado',
        'Verificación de seguridad completada',
        'Actualización de firmware disponible',
        'Análisis de tráfico completado'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    addLogEntry(randomMessage);
}, 10000);