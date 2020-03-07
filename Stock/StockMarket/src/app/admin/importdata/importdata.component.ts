import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {
  excelUploadForm:FormGroup;

  constructor(private uploadService : UploadService) { }

  file:File;
  isError:boolean=false;
  errorMessage:string= "";

  ngOnInit() {
    // bsCustomFileInput.init();
    this.excelUploadForm= new FormGroup({
      excelFileUpload: new FormControl("", [Validators.required])
    })
  }

  onFileChange(e)
  {
    this.file=e.target.files[0];
  }
  uploadData()
  {
    const uploadSheetData= new FormData();
    uploadSheetData.append("stocksSheet", this.file, this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
      data => {
        console.log("Uploaded");

      }
    );
    
  }

}
