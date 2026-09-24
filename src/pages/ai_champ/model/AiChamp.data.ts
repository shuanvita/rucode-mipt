import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { AiChampBenefitsProps } from '~/widgets/ai_champ/benefits'
import type { AiChampLeaguesProps } from '~/widgets/ai_champ/leagues'
import type { AiChampStagesProps } from '~/widgets/ai_champ/stages'

const hero = {
  title:
    '<span class="text-yellow-primary text-[40px] tracking-[0.04px]">Чемпионат</span><br /><span class="text-[60px]">RuCode_</span><br /><span class="text-[30px] lowercase text-yellow-primary tracking-normal font-semibold">по искусственному интеллекту</span>',
  description: [
    'Чемпионат RuCode по ИИ — твой шанс побороться за ценные призы, прокачать навыки на реальных задачах, пообщаться с экспертами и сделать шаг к карьере в ИТ.',
    'Прими вызов, решай задачи, побеждай и попади в сообщество, где развивают искусственный интеллект в России!',
  ],
  image: '/images/ai_champ/hero.png',
}

const benefits: AiChampBenefitsProps = {
  title: 'Участников ждут',
  items: [
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-1.png',
      text: 'реальные ML/DS-задачи от компаний-партнёров',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-2.png',
      text: 'тренировочный и соревновательный треки',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-3.png',
      text: 'задачи разных уровней сложности',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-4.png',
      text: 'возможность получить призы, сертификаты и карьерные возможности',
    },
  ],
  quote:
    'Решайте задачи, улучшайте модели, защищайте решения перед экспертами индустрии и становитесь частью сообщества RuCode.',
}

const leagues: AiChampLeaguesProps = {
  title: 'Лиги RuCode',
  items: [
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/league-1.png',
      title: 'Лига Профессионалов',
      description: [
        'Лига для всех, кто уверен в своих силах: тренируйся на простых задачах уровня Base и выигрывай призы за задачи PRO.',
        'Лучшие команды получат в награду ценные призы и, конечно же, дипломы победителей и призеров! А также будут приглашены на очную церемонию награждения и на экскурсию в офис к партнёрам Фестиваля.',
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/league-2.png',
      title: 'Лига Юниоров',
      description: [
        'Для участия в Лиге Юниоров приглашаются команды, состоящие полностью из школьников и студентов колледжей и техникумов.',
        'Прокачивайте навыки в решении задач уровня Base, получайте призы, сертификаты участников и дипломы победителей и призеров.',
      ],
      reverse: true,
    },
  ],
  action: {
    to: 'https://edu.mipt.ru/member/meroprijatija/chempionat-rucode-po-iskusstvennomu-intellektu-2026',
    text: 'Зарегистрироваться',
  },
}

const stages: AiChampStagesProps = {
  title: 'Этапы',
  items: [
    {
      id: crypto.randomUUID(),
      description: [
        '<span class="font-bold">Регистрация открыта до 12 октября 2026 г.</span>',
        'Регистрация на решение задач в тренировочном формате (вне зачёта) доступна до 30 ноября 2026 года.',
      ],
    },
    {
      id: crypto.randomUUID(),
      description: [
        'В личном кабинете ты найдёшь бесплатные онлайн-курсы от RuCode,<span class="font-bold"> а также тренировочный контест с задачами прошлых лет, на которых можно подтянуть свои скилы.</span>',
      ],
      reverse: true,
    },
    {
      id: crypto.randomUUID(),
      description: [
        'Задачи уровня <span class="font-bold text-yellow-primary">BASE</span> будут доступны в личном кабинете с <span class="font-bold">24 августа</span>. Приём решений закроется <span class="font-bold">12 октября!</span>',
        'Задачи уровня PRO будут открыты 1 сентября. Приём решений закроется 12 октября! Рассчитаны на участников с продвинутыми знаниями — талантливых опытных школьников, студентов ИТ-направлений и специалистов по ИИ.',
      ],
    },
    {
      id: crypto.randomUUID(),
      description: [
        '<span class="font-bold">Защита лучших решений — 6 ноября.</span>',
        'Командам, набравшим высшие баллы по задачам, предстоит защитить свои решения перед методистами RuCode и экспертами компаний-партнёров. Открытая защита проходит в формате онлайн-презентации. На защите участники и эксперты обменяются практическим опытом, знаниями и советами.',
      ],
      reverse: true,
    },
    {
      id: crypto.randomUUID(),
      description: [
        '<span class="font-bold">Церемония награждения RuCode.</span>',
        'Команды-финалисты: победители и призёры приглашаются на Церемонию награждения RuCode в Москве. На мероприятии подведут итоги и наградят победителей и призёров Чемпионата ценными призами и мерчем от компаний-партнёров Фестиваля RuCode.',
      ],
    },
  ],
}

export const aiChampData: ContentPage = {
  slug: '/ai_champ',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('benefits', 20, benefits),
    createFallbackBlock('leagues', 30, leagues),
    createFallbackBlock('stages', 40, stages),
  ],
}
