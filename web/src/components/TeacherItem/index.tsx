import React from 'react';
import TeacherList from '../../pages/TeacherList';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/32341930?s=460&u=732a2e592797f578a4fccea4546c4cb60f40a6d0&v=4" alt="Yesmin" />
                <div>
                    <strong>Yesmin Marie</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ligula id enim efficitur elementum.
                    <br /><br />
                    Maecenas a orci ex. Duis dignissim, justo eu venenatis pharetra, nisi enim ultricies nisi, in blandit enim nibh et nulla. In vel mollis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non quam ante. Praesent vehicula nec ex eu vulputate. Aliquam lacinia efficitur arcu, quis fringilla ligula elementum et.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;