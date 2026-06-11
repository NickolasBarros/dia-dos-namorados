// ================= CONFIGURAÇÕES ==================
// 📅 MUDE A DATA DO INÍCIO DO NAMORO AQUI!
// Formato: new Date(ANO, MÊS-1, DIA)
// Exemplo: 12 de Junho de 2024 -> new Date(2024, 5, 12)
const startDate = new Date(2026, 5, 26);  // <--- MUDE AQUI A DATA!

// ==================================================
// 📸 SUAS MEMÓRIAS - COLE AS URLs DAS SUAS FOTOS AQUI!
// ==================================================
// Como conseguir as URLs:
// 1. Acesse https://imgbb.com/
// 2. Envie cada foto
// 3. Copie o "Direct URL" de cada foto
// 4. Cole nos lugares abaixo (onde está "https://exemplo.com/foto.jpg")
// ==================================================

const memories = [
    {
        // PRIMEIRA MEMÓRIA - Substitua a URL abaixo pela sua foto
        photo: "fotos/foto1.jpeg",  // <--- COLE A URL DA FOTO 1 AQUI
        title: "Nosso primeiro jantar",
        description: "Lembro do seu sorriso e do seu choro no dia,voce estava linda naquele vestido,lembro da pizza e dos salgadinhos que a gente compartilhou. Nunca vou esquecer a felicidade que senti ao conhecer os seus pais.",
        date: "29/05/2026"  // <--- MUDE A DATA
    },
    {
        // SEGUNDA MEMÓRIA - Livros Favoritos (como você pediu)
        photo: "fotos/foto2.jpeg",  // <--- COLE A URL DA FOTO 2 AQUI
        title: "Livros favoritos 📚",
        description: "Amo escutar voce falando sobre os livros que lé, amo te olhar feliz por estar fazendo o que voce gosta,te darei livros sempre que puder.",
        date: "05/04/2026"  // <--- MUDE A DATA
    },
    {
        // TERCEIRA MEMÓRIA - Substitua a URL abaixo pela sua foto
        photo: "fotos/foto3.jpeg",  // <--- COLE A URL DA FOTO 3 AQUI
        title: "Maratona de filmes",
        description: "Você dormiu no meu ombro, eu admirei seus olhos, beijei sua mão e tivemos o nosso primeiro beijo, foi timido e inocente, nunca vou esquecer.",
        date: "24/05/2026"  // <--- MUDE A DATA
    },
    {
        // QUARTA MEMÓRIA - Substitua a URL abaixo pela sua foto
        photo: "fotos/foto4.jpeg",  // <--- COLE A URL DA FOTO 4 AQUI
        title: "momentos",
        description: "Estamos indo para duas semanas de namoro, duas semana juntos, e mesmo com tão pouco tempo ja passamos por tantos momentos para lembrar, e vou guardar todos no meu coração, na minha mente, na minha alma e eternizar aqui.",
        date: "12/06/2026"  // <--- MUDE A DATA
    },
    {
        // QUINTA MEMÓRIA - Substitua a URL abaixo pela sua foto
        photo: "fotos/foto5.jpeg",  // <--- COLE A URL DA FOTO 5 AQUI
        title: "Nossos Planos",
        description: "preocupação, carinho, cuidado, amor e intensidade são características do nosso namoro, mas a qualidade mais linda na gente é fazer planos e perseguir eles com calma. Como Crema, como filmes, series, viagens para o interior e sitio. Amo como nós temos um foco.",
        date: "??/💖/??"  // <--- MUDE A DATA
    }
];

// ========== FRASES DO BOTÃO SURPRESA (pode mudar também) ==========
const surpriseMessages = [
    "💖 Você é a música mais linda que já tocou no meu coração! 💖",
    "🌹 Meu mundo é mais colorido porque você existe. Eu Te gosto só um pouquinho ! 🌹",
    "✨ Todo dia eu escolho você e vou escolher sempre. ✨",
    "💏 Você é meu lar. Obrigado por todo amor e parceria. 💏",
    "🎁 Prometo te fazer sorrir todos os dias da sua vida. 🎁",
    "🌟 Você é a melhor coisa que já me aconteceu. Minha princesa! 🌟",
    "📚 Call me by your name, just as i will call you by mine! Eu Te amo! 📚",
    "🥰 Seu sorriso ilumina meu mundo mais que qualquer estrela. 🥰"
];

// ==================================================
// ========== NÃO MEXA DAQUI PARA BAIXO ==========
// ==================================================

// Renderizar galeria de memórias
function renderGallery() {
    const galleryContainer = document.getElementById('memoryGallery');
    galleryContainer.innerHTML = '';
    
    memories.forEach((mem) => {
        const card = document.createElement('div');
        card.className = 'memory-item';
        card.innerHTML = `
            <img class="memory-photo" src="${mem.photo}" alt="${mem.title}" onerror="this.src='https://via.placeholder.com/130x130?text=📸+Foto+não+encontrada'">
            <div class="memory-title">${mem.title}</div>
            <div class="memory-date">${mem.date}</div>
            <div class="click-hint">❤️ clique para ver mais ❤️</div>
        `;
        card.addEventListener('click', () => {
            showMemoryDetail(mem);
        });
        galleryContainer.appendChild(card);
    });
}

// Mostrar detalhes da memória com foto ampliada (tamanho adequado)
function showMemoryDetail(memory) {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalMessage = document.getElementById('modalMessage');
    const modalDescription = document.getElementById('modalDescription');
    
    // Garantir que a foto seja exibida
    modalPhoto.style.display = 'block';
    modalPhoto.src = memory.photo;
    modalPhoto.alt = memory.title;
    
    // Tratar erro de carregamento da imagem
    modalPhoto.onerror = function() {
        this.src = 'https://via.placeholder.com/400x300?text=📸+Foto+não+encontrada';
    };
    
    modalMessage.innerHTML = `<strong>📸 ${memory.title}</strong><br><span style="font-size: 0.9rem;">${memory.date}</span>`;
    modalDescription.innerHTML = memory.description + '<br><br>💖 Esse momento jamais será esquecido. 💖';
    
    modal.style.display = 'flex';
}

// Atualizar contador
function updateTimer() {
    const now = new Date();
    const diffTime = now - startDate;
    
    if (diffTime < 0) {
        document.getElementById('days').innerText = '66';
        document.getElementById('hours').innerText = '1.584';
        document.getElementById('minutes').innerText = '95.040';
        document.getElementById('seconds').innerText = '5.702.400';
        return;
    }
    
    const totalSeconds = Math.floor(diffTime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Mostrar surpresa (sem imagem, só texto)
function showRandomSurprise() {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalMessage = document.getElementById('modalMessage');
    const modalDescription = document.getElementById('modalDescription');
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    
    // Esconder a foto no modo surpresa
    modalPhoto.style.display = 'none';
    modalPhoto.src = '';
    
    modalMessage.innerHTML = `<strong>✨ SURPRESA ESPECIAL ✨</strong><br><span style="font-size: 1.5rem;">💌</span>`;
    modalDescription.innerHTML = surpriseMessages[randomIndex] + '<br><br>💕 Com todo meu amor, hoje e sempre 💕';
    
    modal.style.display = 'flex';
}

// Fechar modal e restaurar estado da foto
function closeModal() {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    modal.style.display = 'none';
    modalPhoto.style.display = 'block'; // Restaurar para a próxima vez que abrir uma foto
    modalPhoto.src = ''; // Limpar para não ficar imagem antiga
}

// Corações flutuantes
function createFloatingHeart() {
    const heartDiv = document.createElement('div');
    heartDiv.classList.add('floating-heart');
    const heartsArray = ['❤️', '💖', '💗', '💓', '💕', '💞', '🌸', '🌹', '🥰', '💑', '📚', '😍'];
    heartDiv.innerText = heartsArray[Math.floor(Math.random() * heartsArray.length)];
    const size = Math.random() * 1.2 + 0.8;
    heartDiv.style.fontSize = `${size}rem`;
    heartDiv.style.left = Math.random() * 100 + '%';
    heartDiv.style.animationDuration = Math.random() * 6 + 6 + 's';
    heartDiv.style.animationDelay = Math.random() * 5 + 's';
    heartDiv.style.opacity = Math.random() * 0.5 + 0.3;
    document.getElementById('heartBg').appendChild(heartDiv);
    setTimeout(() => {
        heartDiv.remove();
    }, 11000);
}

// Efeito de clique
function addClickHeartEffect(e) {
    const rippleHeart = document.createElement('div');
    rippleHeart.innerText = '❤️';
    rippleHeart.style.position = 'fixed';
    rippleHeart.style.left = e.clientX + 'px';
    rippleHeart.style.top = e.clientY + 'px';
    rippleHeart.style.fontSize = '1.8rem';
    rippleHeart.style.pointerEvents = 'none';
    rippleHeart.style.zIndex = '9999';
    rippleHeart.style.transform = 'translate(-50%, -50%)';
    rippleHeart.style.animation = 'floatUp 1s ease-out forwards';
    rippleHeart.style.opacity = '1';
    document.body.appendChild(rippleHeart);
    setTimeout(() => rippleHeart.remove(), 1000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    updateTimer();
    setInterval(updateTimer, 1000);
    
    setInterval(createFloatingHeart, 800);
    for (let i = 0; i < 12; i++) {
        setTimeout(() => createFloatingHeart(), i * 200);
    }
    
    document.getElementById('surpriseButton').addEventListener('click', showRandomSurprise);
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('photoModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.body.addEventListener('click', addClickHeartEffect);
    
    console.log("%c❤️ Site Dia dos Namorados - Pronto para adicionar suas fotos! ❤️", "color: #c2185b; font-size: 16px; font-weight: bold;");
});