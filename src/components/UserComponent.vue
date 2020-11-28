<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="pr-0" cols="4">
                    <v-img max-height="180px" contain src="@/assets/images/image.png"></v-img>
                </v-col>
                <v-col class="pl-0" cols="8">
                    <v-row>
                        <v-col class="py-1 pl-6 name-txt">
                            {{user.name}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="py-1 pl-6 role-txt">
                            {{user.role}}
                        </v-col>
                    </v-row>
                    <v-row class="status-bg">
                        <v-col class="py-1 pl-6 status-txt">
                            {{user.status}}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-end pr-6">
                    Услуг
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col class="services-block" cols="8">
                    <v-row v-for="(service,index) in user.services" :key="index">
                        <v-col class="pl-0 py-1" cols="9">
                            <v-progress-linear
                                    :color="service.color"
                                    buffer-value="0"
                                    rounded
                                    :value="service.percent"
                                    height="40px"
                            >
                                <div class="linear">
                                    {{service.title}}
                                </div>

                            </v-progress-linear>
                        </v-col>
                        <v-col class="py-1 text-center" cols="3">
                            {{service.quantity}}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="8">
                    <v-row class="all-reviews-txt">
                        <v-col cols="9">
                            Всего
                        </v-col>
                        <v-col class="pr-6 text-center" cols="3">
                            {{totalAmount}}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="name-txt pr-1" cols="5">
                    Последние отзывы
                </v-col>
                <v-col class="name-txt px-0" cols="3">
                    <a href="#">
                        Все отзывы
                    </a>
                </v-col>
                <v-col class="text-end pl-0 pr-2" cols="4">
                    <v-icon small color="#73B4D5">
                        favorite
                    </v-icon>
                    <span>{{user.likes}}</span>
                    <v-icon small color="#73B4D5">
                        speaker_notes
                    </v-icon>
                    <span>{{user.comments}}</span>
                </v-col>
            </v-row>
            <v-row v-for="(review, index) in user.reviews" :key="index">
                <v-col class="py-0">
                    <v-row>
                        <v-col>
                            <span class="review-name">
                              {{review.name}}
                            </span>
                            <span class="role-txt">
                            {{review.date}}
                          </span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="pt-1">
                            <div class="review-block pa-3">
                                {{review.review}}
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <input placeholder="Имя" class="input" v-model="name">
                </v-col>
                <v-col cols="12">
                    <textarea placeholder="Комментарий" class="textarea" v-model="message"
                              @keyup.ctrl.enter.prevent="addReview()"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center">
                    <v-btn :disabled="name === '' || message === ''" color="#FDD639" class="btn" @click="addReview()">
                        Написать консультанту
                    </v-btn>
                </v-col>
            </v-row>
            <v-snackbar
                    color="blue-grey"
                    left
                    shaped
                    bottom
                    v-model="snackbar">
                Спасибо Вам за Ваш отзыв!
            </v-snackbar>
        </v-container>
    </div>
</template>

<script>
	export default {
		name: 'UserComponent',

		data: () => ({
			name: '',
			message: '',
			snackbar: false
		}),
		computed: {
			user() {
				return this.$store.state.userModule.user
			},
			totalAmount: function () {
				let sum = 0;
				this.user.services.forEach(e => {
					sum += e.quantity;
				});
				return sum
			}
		},
		methods: {
			addReview() {
				let date = new Date().getDate()
				let month = new Date().toLocaleString('ru', {
					month: 'long'
				});
				let year = new Date().getFullYear()
				let fullDate = String(date + ' ' + month + ' ' + year)
				this.$store.commit('SetUserReview', {name: this.name, review: this.message, date: fullDate})
				this.snackbar = true
				this.clearInputs()
			},
			clearInputs() {
				this.name = ''
				this.message = ''
			}
		}
	}
</script>

<style scoped>

    .name-txt {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #333333;
    }

    .role-txt {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #808080;
    }

    .status-txt {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #333333;
    }

    .all-reviews-txt {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        color: #333333;
    }

    .review-name {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: #333333;
    }

    .review-txt {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #333333;
    }

    .review-block {
        background: #F2FBFF;
        border: 1px solid #C4CBCF;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
    }

    .status-bg {
        background: #FFFBC8;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .services-block {
        border-top: 1px solid #DADADA;
        border-bottom: 1px solid #DADADA;
    }

    .linear {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
    }

    .input {
        padding: 5px;
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 1px;
        width: 100%;
    }

    .textarea {
        padding: 5px;
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 1px;
        width: 100%;
        height: 63px;
    }

    .btn {
        border-radius: 23px;
    }

    .v-btn {
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        color: #333333 !important;
        text-transform: none !important;
    }
</style>
