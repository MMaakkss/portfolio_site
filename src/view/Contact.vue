<template>
	<div class="contact">
		<div class="contact__accordion">
			<Accordion
				v-for="(item, idx) in items"
				:key="idx" :data="item"
			/>
		</div>
		<div class="contact__main">
			<div class="contact__form">
				<FormKit
					type="form"
					v-if="!isSubmit"
					:actions="false"
					:incomplete-message="false"
					@submit="submitForm"
				>
					<FormKit
						name="name"
						label="_name:"
						validation="required"
						input-class="contact__form__input"
					/>
					<FormKit
						type="email"
						name="email"
						label="_email:"
						validation="required|email"
						input-class="contact__form__input"
					/>
					<FormKit
						type="textarea"
						label="_message:"
						rows="5"
						name="message"
						input-class="contact__form__input"
					/>
					<FormKit
						type="submit"
						label="submit-message"
					/>
				</FormKit>
				<div v-if="isSubmit" class="contact__form-submitted">
					<p class="contact__form-submitted__thanks">Thank you! 🤘</p>
					<p class="contact__form-submitted__info">Your message has been accepted. You will recieve answer
						really soon!</p>
					<button @click="activateForm">send-new-message</button>
				</div>
			</div>

			<div></div>
		</div>
	</div>
</template>
<script>
import Accordion from "@/components/Accordion.vue";

export default {
	name: "Contact",
	components: {
		Accordion,
	},
	data() {
		return {
			items: [
				{
					title: 'contacts',
					icon: '',
					inner: [
						{
							title: 'maks_minakov@icloud.com',
							icon: 'custom-mail'
						},
						{
							title: '+38094583772',
							icon: 'custom-tel'
						}
					]
				},
				{
					title: 'find-me-also-in',
					icon: '',
					inner: [
						{
							title: 'Telegram',
							icon: 'custom-link',
							link: '#',
						},
					]
				}
			],
			isSubmit: false
		}
	},
	methods: {
		activateForm() {
			this.isSubmit = !this.isSubmit;
		},
		submitForm(data) {
			console.log(data);

			this.activateForm();
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';

.contact {
	display: flex;
	height: 100%;

	&__accordion {
		border-right: 1px solid $dark_grey;
	}

	&__main {
		width: 100%;
	}

	&__form {
		padding-top: 115px;

		:deep {
			.formkit-form {
				display: flex;
				flex-direction: column;
				gap: 24px;
				width: 372px;
				margin: auto;
			}

			.formkit-message {
				color: $orange;
				font-size: 0.8rem;
				margin-top: 5px;
			}

			.contact__form__input {
				background-color: $dark_blue;
				padding: 10px 15px;
				border-radius: 8px;
				border: 1px solid $dark_grey;
				margin-top: 10px;
				transition: box-shadow 0.25s ease;
				color: $white;
				width: 100%;

				&:-webkit-autofill {
					-webkit-text-fill-color: $white;
					transition: background-color 5000s ease-in-out 0s;
				}

				&:focus {
					box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3)
				}
			}

			button {
				background-color: $gray;
				padding: 10px 15px;
				color: $white;
				border-radius: 8px;
				transition: 0.25s ease;
				border: 1px solid $dark_blue;
				font-size: 14px;

				&:hover {
					background-color: unset;
					border-color: $white;
				}
			}
		}

	}

	&__form-submitted {
		text-align: center;

		&__thanks {
			font-size: 26px;
			font-weight: 450;
			color: $white;
		}

		&__info {
			max-width: 382px;
			font-size: 18px;
			margin: 15px auto 35px;
		}
	}
}
</style>