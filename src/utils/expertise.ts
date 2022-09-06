import gsap from 'gsap';

export const expertisePage = () => {
  $('.wrap-block-expand').css({ display: 'none' });
  $('.block-expand-expertise').css({ display: 'none' });

  // $('.block-expertise:nth-child(1)').click(function () {
  //   $(this).siblings('.wrap-block-expand').css({
  //     display: 'block',
  //   });
  //   $(this).siblings('.wrap-block-expand').find('.block-expand-expertise:nth-child(1)').css({
  //     display: 'flex',
  //   });
  //   $(this).css({ 'background-color': '#14103A' });
  // });

  var clicks = 0;

  $('.block-expertise:nth-child(1)').click(function () {
    if (clicks % 2 == 0) {
      // first click
      $(this).siblings('.wrap-block-expand').css({
        display: 'block',
      });
      $(this).siblings('.wrap-block-expand').find('.block-expand-expertise:nth-child(1)').css({
        display: 'flex',
      });
      $('.block-expertise').css({ 'pointer-events': 'none' });

      const thisClass = $(this)
        .siblings('.wrap-block-expand')
        .find('.block-expand-expertise:nth-child(1)');
      gsap.to(thisClass, { scale: 1.1 });

      $(this).css({ 'background-color': '#14103A' });
    } else {
      // second click

      $('.wrap-block-expand').css({ display: 'none' });
      $('.block-expand-expertise').css({ display: 'none' });
      // $('.block-expertise').css({ 'background-color': '#1d1752' });
      $('.block-expertise').removeAttr('style');
    }
    ++clicks;
  });

  //

  $('.block-expertise:nth-child(2)').click(function () {
    if (clicks % 2 == 0) {
      // first click
      $(this).siblings('.wrap-block-expand').css({
        display: 'block',
      });
      $(this).siblings('.wrap-block-expand').find('.block-expand-expertise:nth-child(2)').css({
        display: 'flex',
      });
      $('.block-expertise').css({ 'pointer-events': 'none' });

      const thisClass = $(this)
        .siblings('.wrap-block-expand')
        .find('.block-expand-expertise:nth-child(2)');
      gsap.to(thisClass, { scale: 1.1 });

      $(this).css({ 'background-color': '#14103A' });
    } else {
      // second click

      $('.wrap-block-expand').css({ display: 'none' });
      $('.block-expand-expertise').css({ display: 'none' });
      // $('.block-expertise').css({ 'background-color': '#1d1752' });
      $('.block-expertise').removeAttr('style');
    }
    ++clicks;
  });
  //

  $('.block-expertise:nth-child(3)').click(function () {
    if (clicks % 2 == 0) {
      // first click
      $(this).siblings('.wrap-block-expand').css({
        display: 'block',
      });
      $(this).siblings('.wrap-block-expand').find('.block-expand-expertise:nth-child(3)').css({
        display: 'flex',
      });
      $('.block-expertise').css({ 'pointer-events': 'none' });

      const thisClass = $(this)
        .siblings('.wrap-block-expand')
        .find('.block-expand-expertise:nth-child(3)');
      gsap.to(thisClass, { scale: 1.1 });

      $(this).css({ 'background-color': '#14103A' });
    } else {
      // second click

      $('.wrap-block-expand').css({ display: 'none' });
      $('.block-expand-expertise').css({ display: 'none' });
      // $('.block-expertise').css({ 'background-color': '#1d1752' });
      $('.block-expertise').removeAttr('style');
    }
    ++clicks;
  });

  //

  $('.block-expertise:nth-child(4)').click(function () {
    if (clicks % 2 == 0) {
      // first click
      $(this).siblings('.wrap-block-expand').css({
        display: 'block',
      });
      $(this).siblings('.wrap-block-expand').find('.block-expand-expertise:nth-child(4)').css({
        display: 'flex',
      });
      $('.block-expertise').css({ 'pointer-events': 'none' });

      const thisClass = $(this)
        .siblings('.wrap-block-expand')
        .find('.block-expand-expertise:nth-child(4)');
      gsap.to(thisClass, { scale: 1.1 });

      $(this).css({ 'background-color': '#14103A' });
    } else {
      // second click

      $('.wrap-block-expand').css({ display: 'none' });
      $('.block-expand-expertise').css({ display: 'none' });
      // $('.block-expertise').css({ 'background-color': '#1d1752' });
      $('.block-expertise').removeAttr('style');
    }
    ++clicks;
  });

  //close x button
  $('.closed').click(function () {
    const thisClass = $('.wrap-block-expand').find('.block-expand-expertise');
    gsap.to(thisClass, 0.5, { scale: 1 });
    $('.wrap-block-expand').css({ display: 'none' });
    $('.block-expand-expertise').css({ display: 'none' });

    $('.block-expertise').removeAttr('style');
    ++clicks;
  });
};
