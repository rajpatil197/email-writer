package com.email.writer.Entities;

import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
}
