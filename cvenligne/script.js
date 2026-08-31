/**
 * AKESSE FRANCK YANNICK ROMEO — Digital Business Card & Landing Page
 * Interactive Logic: vCard generation, Native Web Share, QR Code, Modals, Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Profile Data Configuration
  const profileData = {
    firstName: "Franck Yannick Romeo",
    lastName: "AKESSE",
    fullName: "AKESSE Franck Yannick Romeo",
    organization: "SpeakPro Academy",
    title: "Fondateur & English Communication Coach",
    phone: "+2250700000000", // Remplacer par le numéro officiel si souhaité
    email: "contact@speakproacademy.com",
    website: "https://speakproacademy.com",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    note: "Coach d'anglais professionnel & Fondateur de SpeakPro Academy. Préparation ENA, CEFR, TOEFL, Business English."
  };

  // -------------------------------------------------------------
  // 1. vCard (.vcf) Generator & Downloader
  // -------------------------------------------------------------
  const vcardBtn = document.getElementById('vcardBtn');

  function generateVCard() {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${profileData.lastName};${profileData.firstName};;;`,
      `FN:${profileData.fullName}`,
      `ORG:${profileData.organization}`,
      `TITLE:${profileData.title}`,
      `TEL;TYPE=CELL,VOICE:${profileData.phone}`,
      `EMAIL;TYPE=INTERNET,WORK:${profileData.email}`,
      `URL;TYPE=WORK:${profileData.website}`,
      `ADR;TYPE=WORK:;;${profileData.city};;;${profileData.country}`,
      `NOTE:${profileData.note}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AKESSE_Franck_Yannick_Romeo.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Fiche de contact téléchargée !');
  }

  if (vcardBtn) {
    vcardBtn.addEventListener('click', generateVCard);
  }

  // -------------------------------------------------------------
  // 2. Modals Management (Appointment & QR Code)
  // -------------------------------------------------------------
  const appointmentModal = document.getElementById('appointmentModal');
  const qrModal = document.getElementById('qrModal');

  const mainAppointmentBtn = document.getElementById('mainAppointmentBtn');
  const stickyAppointmentBtn = document.getElementById('stickyAppointmentBtn');
  const closeAppointmentModal = document.getElementById('closeAppointmentModal');

  const qrModalBtn = document.getElementById('qrModalBtn');
  const closeQrModal = document.getElementById('closeQrModal');

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Appointment Modal Triggers
  if (mainAppointmentBtn) {
    mainAppointmentBtn.addEventListener('click', () => openModal(appointmentModal));
  }
  if (stickyAppointmentBtn) {
    stickyAppointmentBtn.addEventListener('click', () => openModal(appointmentModal));
  }
  if (closeAppointmentModal) {
    closeAppointmentModal.addEventListener('click', () => closeModal(appointmentModal));
  }

  // QR Modal Triggers
  if (qrModalBtn) {
    qrModalBtn.addEventListener('click', () => {
      renderQRCode();
      openModal(qrModal);
    });
  }
  if (closeQrModal) {
    closeQrModal.addEventListener('click', () => closeModal(qrModal));
  }

  // Close modals on click outside
  [appointmentModal, qrModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(appointmentModal);
      closeModal(qrModal);
    }
  });

  // -------------------------------------------------------------
  // 3. Share & Copy Link Functionality
  // -------------------------------------------------------------
  const shareBtn = document.getElementById('shareBtn');
  const copyLinkBtn = document.getElementById('copyLinkBtn');

  async function shareCard() {
    const shareData = {
      title: `${profileData.fullName} | SpeakPro Academy`,
      text: `Découvrez la carte de visite de ${profileData.fullName}, Coach d'anglais & Fondateur de SpeakPro Academy.`,
      url: window.location.href.startsWith('http') ? window.location.href : profileData.website
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(shareData.url);
        }
      }
    } else {
      copyToClipboard(shareData.url);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Lien de la carte copié !');
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Lien copié dans le presse-papier !');
    } catch (err) {
      showToast('Impossible de copier automatiquement le lien.');
    }
    document.body.removeChild(textArea);
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', shareCard);
  }
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      const url = window.location.href.startsWith('http') ? window.location.href : profileData.website;
      copyToClipboard(url);
    });
  }

  // -------------------------------------------------------------
  // 4. Dynamic QR Code Generator (SVG Standalone)
  // -------------------------------------------------------------
  function renderQRCode() {
    const container = document.getElementById('qrCanvasContainer');
    if (!container || container.dataset.rendered === 'true') return;

    const targetUrl = window.location.href.startsWith('http') ? window.location.href : profileData.website;
    
    // Generate clean modern QR code via quick high-res image service with fallback SVG
    const qrImg = document.createElement('img');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(targetUrl)}&color=0b0f19&bgcolor=ffffff&qzone=1`;
    qrImg.alt = "QR Code Digital Business Card";
    qrImg.width = 180;
    qrImg.height = 180;
    qrImg.style.display = "block";
    qrImg.style.borderRadius = "8px";

    // Fallback if offline
    qrImg.onerror = () => {
      container.innerHTML = `
        <div style="width:180px; height:180px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:8px; color:#0f172a; padding:12px; text-align:center;">
          <strong style="font-size:12px;">${profileData.organization}</strong>
          <span style="font-size:10px; color:#64748b; margin-top:4px;">${targetUrl}</span>
        </div>
      `;
    };

    container.innerHTML = '';
    container.appendChild(qrImg);
    container.dataset.rendered = 'true';
  }

  // -------------------------------------------------------------
  // 5. Toast Notification System
  // -------------------------------------------------------------
  let toastTimeout;
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
});
