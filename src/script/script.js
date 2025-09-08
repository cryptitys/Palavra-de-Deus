 document.addEventListener('DOMContentLoaded', function() {
            // Versículos bíblicos para exibir
            const verses = [
                {
                    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
                    reference: "João 3:16"
                },
                {
                    text: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
                    reference: "João 14:6"
                },
                {
                    text: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
                    reference: "Mateus 11:28"
                },
                {
                    text: "Amem-se uns aos outros. Como eu os amei, vocês devem amar-se uns aos outros.",
                    reference: "João 13:34"
                },
                {
                    text: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.",
                    reference: "Romanos 12:2"
                },
                {
                    text: "Tudo posso naquele que me fortalece.",
                    reference: "Filipenses 4:13"
                },
                {
                    text: "O Senhor é o meu pastor; de nada terei falta.",
                    reference: "Salmos 23:1"
                },
                {
                    text: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
                    reference: "Salmos 37:5"
                }
            ];

            // Selecionar um versículo aleatório
            function getRandomVerse() {
                const randomIndex = Math.floor(Math.random() * verses.length);
                return verses[randomIndex];
            }

            // Exibir o versículo do dia
            function displayDailyVerse() {
                const verse = getRandomVerse();
                document.getElementById('verse-text').textContent = `"${verse.text}"`;
                document.getElementById('verse-reference').textContent = verse.reference;
            }

            // Manipular o envio do formulário de oração
            const prayerForm = document.getElementById('prayer-request-form');
            if (prayerForm) {
                prayerForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const prayerText = document.getElementById('prayer').value;
                    const name = document.getElementById('name').value || 'Anônimo';
                    
                    // Aqui normalmente enviaríamos para um servidor
                    // Por enquanto, vamos apenas mostrar um alerta
                    alert(`Obrigado, ${name}! Seu pedido de oração foi recebido. Estaremos orando por você.`);
                    prayerForm.reset();
                });
            }

            // Inicializar
            displayDailyVerse();

            // Adicionar efeito de rolagem suave para links âncora
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Adicionar imagens de placeholder para a galeria
            const galleryItems = document.querySelectorAll('.gallery-img');
            const colors = ['#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057'];
            
            galleryItems.forEach((item, index) => {
                // Criar um placeholder mais interessante
                const color1 = colors[Math.floor(Math.random() * colors.length)];
                const color2 = colors[Math.floor(Math.random() * colors.length)];
                
                item.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
                item.style.display = 'flex';
                item.style.alignItems = 'center';
                item.style.justifyContent = 'center';
                item.innerHTML = `<i class="fas fa-cross" style="font-size: 2rem; color: rgba(0,0,0,0.2);"></i>`;
            });
        });
   
