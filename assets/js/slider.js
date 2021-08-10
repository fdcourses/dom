class Slider {
  constructor(imageArr, startingIndex) {
    this._images = imageArr;
    this._currentIndex = startingIndex;
  }

  get images() {
    return this._images;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(newIndex) {
    if (typeof newIndex !== 'number') {
      throw new TypeError();
    }

    this._currentIndex = newIndex;
  }

  get currentSlide() {
    return this.images[this.currentIndex];
  }

  next() {
    return (this._currentIndex + 1) % this.images.length;
  }

  prev() {
    return (this._currentIndex - 1 + this.images.length) % this.images.length;
  }
}
