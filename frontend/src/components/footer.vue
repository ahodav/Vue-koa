<template>
  <footer class="ui inverted vertical footer segment">
    <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
                <h4 class="ui inverted header">Contact Us</h4>
                <div class="ui inverted link list">
                    <a href="#" class="item"><i class="map icon" />Road to us</a>
                    <a href="#" class="item"><i class="mail icon" />orest97@ukr.net</a>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>

@import '~@/styles/defaults.less';
@import '~@/styles/slices.less';

footer.ui.footer {
    margin-top: @slant-height;
    padding: 5em 0;
    padding-top: 1em;
    .sliceTop(#1b1c1d);
}
</style>
