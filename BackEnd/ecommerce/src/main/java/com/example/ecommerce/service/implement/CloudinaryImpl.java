package com.example.ecommerce.service.implement;

import com.cloudinary.Cloudinary;
import com.example.ecommerce.service.CloudinaryService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
public class CloudinaryImpl implements CloudinaryService {
    private Cloudinary cloudinary;

    public CloudinaryImpl(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }
    @Override
    public String uploadImg(MultipartFile multipartFile) throws IOException {
            return cloudinary.uploader()
                    .upload(multipartFile.getBytes(), Map.of("public_id", UUID.randomUUID().toString()))
                    .get("url")
                    .toString();

    }
}
