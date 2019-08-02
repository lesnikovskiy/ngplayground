import { Component, AfterViewInit } from '@angular/core';
import { ImageService } from '../image.service';

class ImageSnippet {
  constructor(public scr: string, public file: File) {}
}

declare var tinymce;

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements AfterViewInit {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService) { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#wsyig',
      file_picker_types: 'file image media',
      images_upload_url: 'http://localhost:3000/api/upload',
      automatic_uploads: true,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern'
      ],
      toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons',
      image_advtab: true,
    });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
    });

    reader.readAsDataURL(file);
  }

}
