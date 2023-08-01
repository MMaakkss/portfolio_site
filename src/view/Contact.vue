<template>
	<div class="contact">
		<div class="contact__main">
			<div class="contact__form">
				<div
					class="animate__animated form"
					:class="{animate__zoomIn: firstSubmit}"
					v-if="!isSubmit"
				>
					<FormKit
						type="form"
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
				</div>
				<div v-if="isSubmit" class="contact__form-submitted animate__animated animate__zoomIn">
					<p class="contact__form-submitted__thanks">Thank you! 🤘</p>
					<p class="contact__form-submitted__info">Your message has been accepted. You will recieve answer
						really soon!</p>
					<button @click="activateForm">send-new-message</button>
				</div>
			</div>

			<div class="contact__code">
				<CodeSnippet :code="code"/>
			</div>
		</div>
	</div>
</template>
<script>
import emailjs from "emailjs-com";
import CodeSnippet from "../components/Helpers/CodeSnippet.vue";

export default {
	name: "Contact",
	components: {
		CodeSnippet,
	},
	data() {
		return {
			isSubmit: false,
			firstSubmit: false,
			code: [
				'submitForm(data) {\n' +
				'  emailjs\n' +
				'    .send(\n' +
				'      "service_id",\n' +
				'      "template_id"\n' +
				'      { ...data }\n' +
				'      "userId"\n' +
				'    )\n' +
				'    .then(() => {\n' +
				'      this.firstSubmit = true;)\n' +
				'      this.activateForm();\n' +
				'    })\n' +
				'    .catch(error => console.error("FAILED...", error));\n' +
				'},',

				'deleteRoute(ctx, route) {\n' +
				'  let routes = [...this.state.routes]\n' +
				'  let newRoutes = []\n' +
				'  delete routes[route]\n' +
				'  for (let i = 0; i < routes.length; i++) {\n' +
				'    if (routes[i] !== undefined) {\n' +
				'      newRoutes.push(routes[i])\n' +
				'    }\n' +
				'  }\n' +
				'  tctx.commit(\'updateRoutes\', newRoutes)\n' +
				'},',
			],
		}
	},
	methods: {
		activateForm() {
			this.isSubmit = !this.isSubmit;
		},
		submitForm(data) {
			emailjs
				.send(
					"service_olg381s",
					"template_c8yfsti",
					{
						...data
					},
					"zFNkswCQ3i-kc1dDy",
				)
				.then(() => {
					this.firstSubmit = true;
					this.activateForm();
				})
				.catch(error => console.error("FAILED...", error));
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';

.contact {
	display: flex;
	height: 100%;

	&__main {
		width: 100%;
		display: flex;
	}

	&__code {
		flex: 1 1 auto;
		width: fit-content;
		display: flex;
		justify-content: center;
		padding: 100px 50px;
		margin: auto;

		@media (max-width: 1600px) {
			padding: 100px 20px;
		}

		@media (max-width: 1400px) {
			display: none;
		}

		max-height: calc(100vh - 141px);
		overflow: auto;
	}

	&__form {
		width: 45%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid $dark_grey;
		padding: 0 50px;

		@media (max-width: 1600px) {
			padding: 0 20px;
		}

		@media (max-width: 1400px) {
			width: 100%;
			padding: 0 100px;
			border: none;
		}

		@media (max-width: 1040px) {
			padding: 0 50px;
		}

		@media (max-width: 768px) {
			padding: 40px 30px;
		}

		@media (max-width: 475px) {
			padding: 40px 20px;
		}

		@media (max-width: 320px) {
			padding: 40px 10px;
		}

		.form {
			width: 100%;
		}

		:deep {
			.formkit-form {
				max-width: 600px;
				display: flex;
				flex-direction: column;
				gap: 30px;
				width: 100%;
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
				color: $input;
				width: 100%;

				&:-webkit-autofill {
					-webkit-text-fill-color: $input;
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

				@media (max-width: 475px) {
					width: 100%;
				}

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