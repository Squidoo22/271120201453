export default {
	state: {
		user: {
			name: 'Вероника Ростова',
			role: 'Менеджер по продажам',
			status: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны.',
			services: [
				{
					title: 'Ручное бронирование',
					quantity: 11,
					color: '#B1E19B',
					percent: 90,
				},
				{
					title: 'Пакетные туры',
					quantity: 3,
					color: '#ACE2F8',
					percent: 35,
				},
				{
					title: 'Отели',
					quantity: 1,
					color: '#ACE2F8',
					percent: 25,
				}
			],
			reviews: [
				{
					name: 'Самуил',
					date: '13 октября 2011',
					review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
				},
				{
					name: 'Лилия Семёновна',
					date: '14 октября 2011',
					review: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
				},
				{
					name: 'Лилия Семёновна',
					date: '14 октября 2011',
					review: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
				}
			],
			likes: 131,
			comments: 14
		}
	},
	mutations: {
		SetUser(state, payload) {
			state.user = payload
		},
		SetUserReview(state, payload) {
			state.user.reviews.push(payload)
		},
	},
	actions: {},
	getters: {
		getUser: (state) => state.user,
	}
}