<template>
  <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
    <div class="pull-left mt-lg-5">
      <h3>Home</h3>
      <p class="mt-lg-3 text-gray">Initiate transactions, receive updates and track progress</p>
    </div>
    <div class="width-100 dashboard-widget">
      <div class="row">
        <div class="col-md-9 col-lg-9 col-sm-12">
          <div class="form-widget">
            <div class="slideshow-container">
              <div class="mySlides" id="cashew">
                <img src="/static/images/cashew.jpg" style="width:100%; height: 400px;">
                <div class="overlay">
                  <div class="text">
                    <h1>Cashews</h1>
                    <router-link to="/dashboard/cashew">
                      <a class="btn btn-round venice-bg">
                        Go to Cashews
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>

              <!--<div class="mySlides">-->
                <!--<img src="/static/images/container-comflo.png" style="width:100%; height: 400px;">-->
                <!--<div class="text">-->
                  <!--<h1>Banana</h1>-->
                  <!--Coming soon-->
                <!--</div>-->
              <!--</div>-->

              <!--<div class="mySlides">-->
                <!--<img src="/static/images/container-comflo.png" style="width:100%; height: 400px;">-->
                <!--<div class="text"><h1>Cocoa</h1> Coming soon</div>-->
              <!--</div>-->

              <div class="mySlides">
                <img src="/static/images/container-comflo.png" style="width:100%; height: 400px;">
                <div class="text"><h1>New Commodities</h1> Coming soon</div>
              </div>

              <div style="text-align:center">
                <span @click="setSlide(0)" class="dot"></span>
                <span @click="setSlide(1)" class="dot"></span>
                <!--<span @click="setSlide(2)" class="dot"></span>-->
                <!--<span @click="setSlide(3)" class="dot"></span>-->
              </div>

              <!-- Next and previous buttons -->
              <a class="prev" @click="plusSlides(-1)">&#10094;</a>
              <a class="next" @click="plusSlides(1)">&#10095;</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-widget">
            <h5 class="mb-lg-2">Updates</h5>
            <hr>
            <ul class="mt-lg-2">
              <li><router-link to="/dashboard/profile">KYC Process pending</router-link></li>
              <li><router-link to="/dashboard/profile">Please upload contract</router-link></li>
              <li><router-link to="/dashboard/profile">New payment details required</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-md-9 col-lg-9 col-sm-12">
          <div class="form-widget">
            <h5 class="mb-lg-2">Active Transactions</h5>
            <hr>
            <ul class="mt-lg-2">
              <li>Temla - $1,000,000</li>
              <li>Ring - $1,000,000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Dashboard-Index-Home',
  data: function () {
    return {
      slideIndex: 0,
      slides: document.getElementsByClassName('mySlides'),
      dots: document.getElementsByClassName('dot'),
      timeOfDay: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted () {
    this.showSlides()
    this.setTimeOfDay()
  },
  methods: {
    showSlides () {
      let i
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none'
      }
      if (this.slideIndex > this.slides.length - 1) { this.slideIndex = 0 }
      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].className = this.dots[i].className.replace(' active', '')
      }

      this.slides[this.slideIndex].style.display = 'block'
      this.dots[this.slideIndex].className += ' active'
      this.slideIndex++
      setTimeout(this.showSlides, 5000)
    },
    setSlide (index) {
      this.slideIndex = index
      let i
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none'
      }

      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].className = this.dots[i].className.replace(' active', '')
      }

      this.slides[this.slideIndex].style.display = 'block'
      this.dots[this.slideIndex].className += ' active'
    },
    plusSlides (n) {
      if (this.slideIndex === 0 && n === -1) {
        this.slideIndex = this.slides.length - 1
      } else if (this.slideIndex >= this.slides.length - 1 && n === 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex += n
      }

      let i
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none'
      }

      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].className = this.dots[i].className.replace(' active', '')
      }
      this.slides[this.slideIndex].style.display = 'block'
      this.dots[this.slideIndex].className += ' active'
    },
    setTimeOfDay () {
      const today = new Date()
      const curHr = today.getHours()

      if (curHr < 12) {
        this.timeOfDay = 'Morning'
      } else if (curHr < 18) {
        this.timeOfDay = 'Afternoon'
      } else {
        this.timeOfDay = 'Evening'
      }
    }
  }
}
</script>
<style lang="css" scoped>
  * {box-sizing: border-box;}
  .mySlides {display: none;}
  img {vertical-align: middle;}

  a {
    color: blue;
  }

  hr {
    border: 1px solid #f4f6fa;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  /* Slideshow container */
  .slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #ffffff !important;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    z-index: 8;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: #ffffff;
    color: #000000 !important;
  }

  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 20px;
    padding: 8px 12px;
    position: absolute;
    top: 30%;
    width: 100%;
    text-align: center;
  }

  .text h1{
    font-size: 70px;
  }

  /* The dots/bullets/indicators */
  .dot {
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active {
    background-color: #717171;
  }

  .btn-primary {
    background: #28a745 !important;
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0);
    border: none;
  }

  .btn {
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-size: 14px;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 0.1s;
    animation-name: fade;
    animation-duration: 0.1s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .text {font-size: 11px}
  }
</style>
